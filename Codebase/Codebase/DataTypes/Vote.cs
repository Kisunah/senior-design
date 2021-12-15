namespace Codebase.DataTypes
{
    public class Vote
    {
        public string UserId { get; set; }

        public string VoteGuid { get; set; }

        public string VoteType { get; set; }

        public DateTime CreationDate { get; set; }
    }
}
