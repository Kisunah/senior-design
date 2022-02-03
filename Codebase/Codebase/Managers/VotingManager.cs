using Nest;
using Codebase.InputOutput;
using Codebase.DataTypes;

namespace Codebase.Managers
{
    public class VotingManager
    {
        public ElasticClient client;

        public const string indexName = "codebase-121521";

        public VotingManager()
        {
            var settings = new ConnectionSettings(new Uri("http://localhost:9200"))
                .DefaultIndex(indexName);
            client = new ElasticClient(settings);
        }

        public async Task upVoteAsync(string codeGuid, string postType)
        {
            Vote vote = PrepareVoteForIndex(codeGuid);
        }

        #region privateMethods

        private Vote PrepareVoteForIndex(string codeGuid)
        {
            Vote vote = new Vote
            {
                UserId = "test",
                ParentGuid = codeGuid,
                VoteGuid = Guid.NewGuid().ToString(),
                VoteType = "u",
                CreationDate = DateTime.UtcNow
            };
            return vote;
        }

        #endregion
    }
}
