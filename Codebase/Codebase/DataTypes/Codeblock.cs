namespace Codebase.DataTypes
{
    public class Codeblock
    {
        public string Code { get; set; }

        public string Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public bool IsPublic { get; set; }

        public string Language { get; set; }

        public List<string> Tags { get; set; }

        public int VoteCount { get; set; }

        public string UserId { get; set; }

        public DateTime CreationDate { get; set; }

        public List<Comment> Comments { get; set; }

        public List<Vote> Votes { get; set; }
    }
}
