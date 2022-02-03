namespace Codebase.InputOutput
{
    public class DataInput
    {
        public string code { get; set; }

        public bool isPublic { get; set; }

        public List<string> tags { get; set; }
    }

    public class CreateCommentInput
    {
        public string comment { get; set; }
    }
}
