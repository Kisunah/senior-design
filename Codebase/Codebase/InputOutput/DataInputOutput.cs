namespace Codebase.InputOutput
{
    public class CreateCodeblockInput
    {
        public string title { get; set; }

        public string description { get; set; }

        public string code { get; set; }

        public bool isPublic { get; set; }

        public List<string> tags { get; set; }
    }

    public class CreateCodeblockOutput
    {
        public string title { get; set; }

        public string description { get; set; }

        public string code { get; set; }
        
        public bool isPublic { get; set; }

        public List<string> tags { get; set; }

        public string codeblockGuid { get; set; }
    }

    public class CreateCommentInput
    {
        public string comment { get; set; }
    }

    public class CreateVoteOutput
    {
        public string title { get; set; }

        public string description { get; set; }

        public string code { get; set; }

        public int voteCount { get; set; }

        public string codeblockGuid { get; set; }
    }
}
