using Codebase.DataTypes;

namespace Codebase.InputOutput
{
    public class CreateCodeblockInput
    {
        public string title { get; set; }

        public string description { get; set; }

        public string code { get; set; }

        public bool isPublic { get; set; }

        public string language { get; set; }

        public string userId { get; set; }

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

    public class GetCodeblocksInput
    {
        public Dictionary<string, string> filter { get; set; }
    }

    public class GetCodeblocksOutput
    {
        public List<Codeblock> codeblocks { get; set; }
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

    public class SearchCodeblocksInput
    {
        public string search { get; set; } = null;

        public Dictionary<string, string> filters { get; set; }

        public List<string> tags { get; set; }
    }

    public class SearchCodeblocksOutput
    {
        public List<Codeblock> codeblocks { get; set; }
    }

    public class compileCodeblockInput
    {
        public string language { get; set; }
        public string code { get; set; }
        public string versionIndex { get; set; }

    }
}
