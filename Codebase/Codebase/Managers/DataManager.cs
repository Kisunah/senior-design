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

        public const string indexName = "codebase-121521";
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

        private Codeblock PrepareCodeblockForInsert(DataInput input)
        {
            Codeblock codeblock = new Codeblock
            {
                Code = input.code,
                CodeGuid = Guid.NewGuid().ToString(),
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
    }
}
