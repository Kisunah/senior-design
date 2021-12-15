namespace Codebase.DataTypes
{
    public class Comment
    {
        public string CommentString { get; set; }

        public string CommentGuid { get; set; }

        public string UserId { get; set; }

        public int VoteCount { get; set; }

        public DateTime CreationDate { get; set; }
    }
}
