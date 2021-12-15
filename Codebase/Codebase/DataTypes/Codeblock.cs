namespace Codebase.DataTypes
{
    public class Codeblock
    {
        public string Code { get; set; }

        public string CodeGuid { get; set; }

        public bool IsPublic { get; set; }

        public List<string> Tags { get; set; }

        public int VoteCount { get; set; }

        public string UserId { get; set; }

        public DateTime CreationDate { get; set; }

        public List<Comment> Comments { get; set; }

        public List<Vote> Votes { get; set; }
    }
}
