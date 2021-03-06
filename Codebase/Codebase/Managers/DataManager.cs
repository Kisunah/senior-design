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

        public const string indexName = "codebase-032422";

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

        public List<string> GetLanguages()
        {
            List<string> validLanguages = new List<string>
            {
                "asciiarmor"
                ,"c"
                ,"c++"
                ,"c#"
                ,"clojure"
                ,"css"
                ,"haskell"
                ,"htmlembedded"
                ,"java"
                ,"javascript"
                ,"markdown"
                ,"pascal"
                ,"perl"
                ,"php"
                ,"powershell"
                ,"properties"
                ,"python"
                ,"q"
                ,"r"
                ,"ruby"
                ,"sas"
                ,"sass"
                ,"scheme"
                ,"shell"
                ,"spreadsheet"
                ,"sql"
                ,"swift"
                ,"vb"
            };

            validLanguages.Sort();

            return validLanguages;
        }

        public List<string> GetTags()
        {
            List<string> validTags = new List<string>
            {
                "testing","skeleton-code","script","query","selection","help","python2.7","insertion",
                "recursive","javascript","python","java","c#","php","android","html","jquery","c++","css","sql","r","node.js",
                "arrays","c","reactjs","asp.net","json",".net","sql-server","swift","python-3.x","objective-c","angular","angularjs",
                "regex","pandas","ruby","ajax","xml","asp.net-mvc","vba","spring","laravel","database","wordpress","typescript","string",
                "windows","xcode","postgresql","bash","git","vb.net","multithreading","list","dataframe","react-native","algorithm",
                "docker","forms","image","scala","visual-studio","twitter-bootstrap","function","powershell","numpy","api","performance",
                "winforms","selenium","matlab","sqlite","vue.js","apache","hibernate","entity-framework","rest",
                "loops","shell","facebook","android-studio","express","linq","csv","maven","swing","unit-testing","file","class",
                "date","sorting","kotlin","symfony","tsql","dictionary","google-chrome","codeigniter","asp.net-core","perl",
                "dart","opencv","google-maps","datetime","http","for-loop","validation"
            };

            validTags.Sort();

            return validTags;
        }

        public async Task<GetCodeblocksOutput> GetCodeblocks(GetCodeblocksInput input)
        {
            ISearchResponse<Codeblock> response = new SearchResponse<Codeblock>();
            if (input == null || input.filter == null || input.filter.Count == 0)
            {
                response = await client.SearchAsync<Codeblock>(s => s
                    .Index(indexName)
                    .MatchAll());
            }
            else
            {
                var container = new QueryContainer();
                foreach (var filter in input.filter)
                {
                    // This handles filters that aren't tags
                    var query = +new MatchQuery
                    {
                        Field = filter.Key,
                        Query = filter.Value
                    };

                    container &= +query;
                }

                response = await client.SearchAsync<Codeblock>(s => s
                    .Index(indexName)
                    .Query(q => q
                        .Bool(b => b
                            .Must(m => container)                            
                        )
                    )
                );
            }

            List<Codeblock> codeblocks = new List<Codeblock>();
            for (int i = 0; i < response.Documents.Count; i++)
            {
                codeblocks.Add(response.Documents.ElementAt(i));
            }

            GetCodeblocksOutput output = new GetCodeblocksOutput
            {
                codeblocks = codeblocks
            };

            return output;
        }

        public async Task<SearchCodeblocksOutput> SearchCodeblocks(SearchCodeblocksInput input)
        {
            var container = new QueryContainer();
            if (input.filters != null)
            {
                foreach (var filter in input.filters)
                {
                    if (filter.Key == "isPublic")
                    {
                        // This handles filters that aren't tags
                        var query = +new TermQuery
                        {
                            Field = filter.Key,
                            Value = filter.Value == "true" ? true : false
                        };

                        container &= +query;
                    }
                    else
                    {
                        // This handles filters that aren't tags
                        var query = +new TermQuery
                        {
                            Field = filter.Key,
                            Value = filter.Value
                        };

                        container &= +query;
                    }
                    
                }
            }

            var tagsContainer = new NamedFiltersContainer();
            ITermsQuery tagsQuery = new TermsQuery();
            if (input.tags != null)
            {
                tagsQuery = new TermsQuery
                {
                    Field = "tags",
                    Terms = input.tags
                };
            }

            var response = await client.SearchAsync<Codeblock>(s => s
                .Index(indexName)
                .Size(100)
                .Query(q => q
                    .Bool(b => b
                        .Must(m => m
                            .QueryString(c => c
                                .Query(input.search)
                                .DefaultOperator(Operator.Or)
                                .Fields(f => f.Field(p => p.Title).Field("description"))
                            )
                        )
                        .Filter(f => container, f => new TermsQuery
                        {
                            Field = "tags",
                            Terms = input.tags
                        })
                    )
                )
            );


            List<Codeblock> codeblocks = new List<Codeblock>();
            for (int i = 0; i < response.Documents.Count; i++)
            {
                codeblocks.Add(response.Documents.ElementAt(i));
            }

            return new SearchCodeblocksOutput
            {
                codeblocks = codeblocks
            };
        }

        #region privateMethods
        private Codeblock PrepareCodeblockForInsert(CreateCodeblockInput input)
        {
            // Checks to make sure tags and language being passed in are supported
            var tags = GetTags();
            foreach(var tag in input.tags)
            {
                if (tags.IndexOf(tag) == -1) throw new BadHttpRequestException(tag + " is not supported.");
            }

            var languages = GetLanguages();
            if (languages.IndexOf(input.language) == -1) throw new BadHttpRequestException(input.language + " is not supported.");

            Codeblock codeblock = new Codeblock
            {
                Title = input.title,
                Description = input.description,
                Code = input.code,
                Language = input.language,
                Id = Guid.NewGuid().ToString(),
                IsPublic = input.isPublic,
                Tags = input.tags,
                VoteCount = 0,
                Votes = new List<Vote>(),
                Comments = new List<Comment>(),
                UserId = input.userId ?? "CodeBaseDev", // will need to be populated with unique user identifier that is created on user creating an account
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
                UserId = input.userId, // will need to be populated with unique user identifier that is created on user creating an account
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
