using Nest;
using Codebase.InputOutput;
using Codebase.DataTypes;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

namespace Codebase.Managers
{
    public class DataManager
    {
        public ElasticClient client;

        public const string indexName = "codebase-012422";
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

        public async Task InsertData(DataInput input)
        {
            Codeblock codeblock = PrepareCodeblockForInsert(input);
            var indexResponse = await client.IndexDocumentAsync(codeblock);
            
            if (!indexResponse.ToString().Contains("201")) throw new Exception("Error indexing the data.");
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

        public async Task UpVote(string codeblockGuid)
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
        }

        public async Task DownVote(string codeblockGuid)
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
        }

        #region privateMethods
        private Codeblock PrepareCodeblockForInsert(DataInput input)
        {
            Codeblock codeblock = new Codeblock
            {
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
