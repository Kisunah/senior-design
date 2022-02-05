using Nest;
using Codebase.InputOutput;
using Codebase.DataTypes;
using AutoMapper;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

namespace Codebase.Managers
{
    public class DataManager
    {
        public ElasticClient client;

        public const string indexName = "codebase-020422";

        public static MapperConfiguration mapperConfig = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Codeblock, CreateCodeblockOutput>()
                .ForMember(
                    dest => dest.codeblockGuid,
                    opt => opt.MapFrom(src => src.Id)
                );
                cfg.CreateMap<Codeblock, CreateVoteOutput>()
                .ForMember(
                    dest => dest.codeblockGuid,
                    opt => opt.MapFrom(src => src.Id)
                );
            }
        );

        public static Mapper mapper = new Mapper(mapperConfig);
        public DataManager()
        {
            var settings = new ConnectionSettings(new Uri("http://localhost:9200"))
                .DefaultIndex(indexName);
            client = new ElasticClient(settings);
        }

        public async Task CreateIndex()
        {
            var response = await client.Indices.CreateAsync(indexName, s => s
                .Settings(se => se
                    .NumberOfReplicas(0)
                    .NumberOfShards(1))
                .Map<Codeblock>(m => m
                    .AutoMap<Codeblock>()));

            if (!response.ToString().Contains("200")) throw new Exception("Error creating the index.");
        }

        public async Task<CreateCodeblockOutput> CreateCodeblock(CreateCodeblockInput input)
        {
            Codeblock codeblock = PrepareCodeblockForInsert(input);
            var indexResponse = await client.IndexDocumentAsync(codeblock);
            
            if (!indexResponse.ToString().Contains("201")) throw new Exception("Error indexing the codeblock.");

            CreateCodeblockOutput output = mapper.Map<CreateCodeblockOutput>(codeblock);

            return output;
        }

        public async Task CreateComment(CreateCommentInput input, string codeblockGuid)
        {
            Comment comment = PrepareCommentForInsert(input, codeblockGuid);

            var response = await client.GetAsync<Codeblock>(codeblockGuid, idx => idx.Index(indexName));

            Codeblock updateBlock = response.Source;
            updateBlock.Comments.Add(comment);

            var updateResponse = await client.UpdateAsync<Codeblock>(codeblockGuid, u => u
                .Index(indexName)
                .Doc(updateBlock)
            );
        }

        public async Task DeleteComment(string codeblockGuid)
        {
            var response = await client.GetAsync<Codeblock>(codeblockGuid, idx => idx.Index(indexName));

            Codeblock updateBlock = response.Source;
            List<Comment> comments = updateBlock.Comments;
            string userId = "test"; // This will be updated to the current user Id

            Comment userComment = comments.SingleOrDefault(x => x.UserId == userId);
            if (userComment != null)
            {
                comments.Remove(userComment);

                var updateResponse = await client.UpdateAsync<Codeblock>(codeblockGuid, u => u
                    .Index(indexName)
                    .Doc(updateBlock)
                );
            }
            else
            {
                throw new BadHttpRequestException("No comment found for this user on this codeblock");
            }
        }

        public async Task<CreateVoteOutput> UpVote(string codeblockGuid)
        {
            Vote vote = PrepareVoteForInsert(codeblockGuid, "u");

            var response = await client.GetAsync<Codeblock>(codeblockGuid, idx => idx.Index(indexName));

            Codeblock updateBlock = response.Source;
            updateBlock.VoteCount += 1;
            updateBlock.Votes.Add(vote);

            var updateResponse = await client.UpdateAsync<Codeblock>(codeblockGuid, u => u
                .Index(indexName)
                .Doc(updateBlock)
            );

            CreateVoteOutput output = mapper.Map<CreateVoteOutput>(updateBlock);

            return output;
        }

        public async Task<CreateVoteOutput> DownVote(string codeblockGuid)
        {
            Vote vote = PrepareVoteForInsert(codeblockGuid, "d");

            var response = await client.GetAsync<Codeblock>(codeblockGuid, idx => idx.Index(indexName));

            Codeblock updateBlock = response.Source;
            updateBlock.VoteCount -= 1;
            updateBlock.Votes.Add(vote);

            var updateResponse = await client.UpdateAsync<Codeblock>(codeblockGuid, u => u
                .Index(indexName)
                .Doc(updateBlock)
            );

            CreateVoteOutput output = mapper.Map<CreateVoteOutput>(updateBlock);

            return output;
        }

        public async Task RemoveVote(string codeblockGuid)
        {
            var response = await client.GetAsync<Codeblock>(codeblockGuid, idx => idx.Index(indexName));

            Codeblock updateBlock = response.Source;
            List<Vote> votes = updateBlock.Votes;
            string userId = "test"; // This will be updated to the current user Id

            Vote userVote = votes.SingleOrDefault(x => x.UserId == userId);
            if (userVote != null)
            {
                if (userVote.VoteType == "u")
                {
                    updateBlock.VoteCount -= 1;
                }
                else
                {
                    updateBlock.VoteCount += 1;
                }

                votes.Remove(userVote);
                updateBlock.Votes = votes;

                var updateResponse = await client.UpdateAsync<Codeblock>(codeblockGuid, u => u
                    .Index(indexName)
                    .Doc(updateBlock)
                );
            }
            else
            {
                throw new BadHttpRequestException("No vote found for this user");
            }
        }

        #region privateMethods
        private Codeblock PrepareCodeblockForInsert(CreateCodeblockInput input)
        {
            Codeblock codeblock = new Codeblock
            {
                Title = input.title,
                Description = input.description,
                Code = input.code,
                Id = Guid.NewGuid().ToString(),
                IsPublic = input.isPublic,
                Tags = input.tags,
                VoteCount = 0,
                Votes = new List<Vote>(),
                Comments = new List<Comment>(),
                UserId = "test", // will need to be populated with unique user identifier that is created on user creating an account
                CreationDate = DateTime.UtcNow
            };

            return codeblock;
        }

        private Comment PrepareCommentForInsert(CreateCommentInput input, string codeblockGuid)
        {
            Comment comment = new Comment
            {
                CommentString = input.comment,
                CommentGuid = Guid.NewGuid().ToString(),
                ParentGuid = codeblockGuid,
                UserId = "test", // will need to be populated with unique user identifier that is created on user creating an account
                VoteCount = 0,
                CreationDate = DateTime.UtcNow
            };

            return comment;
        }

        private Vote PrepareVoteForInsert(string codeblockGuid, string voteType)
        {
            Vote vote = new Vote
            {
                UserId = "test", // will need to be populated with unique user identifier that is created on user creating an account
                ParentGuid = codeblockGuid,
                VoteGuid = Guid.NewGuid().ToString(),
                VoteType = voteType,
                CreationDate = DateTime.UtcNow
            };

            return vote;
        }
        #endregion
    }
}
