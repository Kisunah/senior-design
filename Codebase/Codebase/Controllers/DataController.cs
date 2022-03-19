using Codebase.InputOutput;
using Codebase.Managers;
using Microsoft.AspNetCore.Mvc;

namespace Codebase.Controllers
{
    public class DataController : ControllerBase
    {
        private readonly ILogger<DataController> _logger;

        private readonly DataManager dataManager;

        public DataController(ILogger<DataController> logger)
        {
            _logger = logger;
            dataManager = new DataManager();
        }

        [HttpPost]
        [Route("/codebase/createIndex")]
        [ProducesResponseType(typeof(void), 201)]
        [Produces("application/json")]
        public async Task<IActionResult> CreateIndex()
        {
            IActionResult actionResult;
            try
            {
                await dataManager.CreateIndex();
                actionResult = new NoContentResult();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }

        [HttpPost]
        [Route("/codebase/createCodeblock")]
        [ProducesResponseType(typeof(CreateCodeblockOutput), 200)]
        [Produces("application/json")]
        public async Task<IActionResult> InsertDataAsync(
            [FromBody] CreateCodeblockInput input)
        {
            IActionResult actionResult;
            try
            {
                CreateCodeblockOutput result = await dataManager.CreateCodeblock(input);
                actionResult = Ok(result);
            }
            catch (HttpRequestException ex)
            {
                _logger.LogError(ex.Message);
                throw new HttpRequestException(ex.Message, ex.InnerException, ex.StatusCode);
            }
            return actionResult;
        }

        [HttpPost]
        [Route("/codebase/{codeblockGuid}/createComment")]
        [ProducesResponseType(typeof(void), 204)]
        [Produces("application/json")]
        public async Task<IActionResult> createCommentAsync(
            [FromBody] CreateCommentInput input,
            [FromRoute] string codeblockGuid)
        {
            IActionResult actionResult;
            try
            {
                await dataManager.CreateComment(input, codeblockGuid);
                actionResult = new NoContentResult();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }

        [HttpDelete]
        [Route("/codebase/{codeblockGuid}/deleteComment")]
        [ProducesResponseType(typeof(void), 204)]
        [Produces("application/json")]
        public async Task<IActionResult> deleteCommentAsync(
            [FromRoute] string codeblockGuid
        )
        {
            IActionResult actionResult;
            try
            {
                await dataManager.DeleteComment(codeblockGuid);
                actionResult = new NoContentResult();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }

        [HttpPost]
        [Route("/codebase/{codeblockGuid}/upVote")]
        [ProducesResponseType(typeof(CreateVoteOutput), 200)]
        [Produces("application/json")]
        public async Task<IActionResult> upVoteAsync(
            [FromRoute] string codeblockGuid)
        {
            IActionResult actionResult;
            try
            {
                CreateVoteOutput result = await dataManager.UpVote(codeblockGuid);
                actionResult = Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }

        [HttpPost]
        [Route("/codebase/{codeblockGuid}/downVote")]
        [ProducesResponseType(typeof(CreateVoteOutput), 200)]
        [Produces("application/json")]
        public async Task<IActionResult> downVoteAsync(
            [FromRoute] string codeblockGuid)
        {
            IActionResult actionResult;
            try
            {
                CreateVoteOutput result = await dataManager.DownVote(codeblockGuid);
                actionResult = Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }

        [HttpDelete]
        [Route("/codebase/{codeblockGuid}/removeVote")]
        [ProducesResponseType(typeof(void), 204)]
        [Produces("application/json")]
        public async Task<IActionResult> removeVoteAsync(
            [FromRoute] string codeblockGuid)
        {
            IActionResult actionResult;
            try
            {
                await dataManager.RemoveVote(codeblockGuid);
                actionResult = new NoContentResult();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }

        [HttpPost]
        [Route("/codebase/getLanguages")]
        [ProducesResponseType(typeof(List<string>), 200)]
        [Produces("application/json")]
        public IActionResult getLanguages()
        {
            IActionResult actionResult;
            try
            {
                List<string> result = dataManager.GetLanguages();
                actionResult = Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }

        [HttpPost]
        [Route("/codebase/getTags")]
        [ProducesResponseType(typeof(List<string>), 200)]
        [Produces("application/json")]
        public IActionResult getTags()
        {
            IActionResult actionResult;
            try
            {
                List<string> result = dataManager.GetTags();
                actionResult = Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }

        [HttpPost]
        [Route("/codebase/getCodeblocks")]
        [ProducesResponseType(typeof(GetCodeblocksOutput), 200)]
        [Produces("application/json")]
        public async Task<IActionResult> getCodeblocksAsync(
            [FromBody] GetCodeblocksInput input)
        {
            IActionResult actionResult;
            try
            {
                GetCodeblocksOutput result = await dataManager.GetCodeblocks(input);
                actionResult = Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }

        [HttpPost]
        [Route("/codebase/searchCodeblocks")]
        [ProducesResponseType(typeof(List<SearchCodeblocksOutput>), 200)]
        [Produces("application/json")]
        public async Task<IActionResult> searchCodeblocksAsync(
            [FromBody] SearchCodeblocksInput input)
        {
            IActionResult actionResult;
            try
            {
                SearchCodeblocksOutput result = await dataManager.SearchCodeblocks(input);
                actionResult = Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }


        [HttpPost]
        [Route("/codebase/compileCodeblock")]
        [ProducesResponseType(typeof(List<SearchCodeblocksOutput>), 200)]
        [Produces("application/json")]
        public async Task<IActionResult> compileCodeblockAsync(
            [FromBody] compileCodeblockInput input)
        {
            IActionResult actionResult;
            try
            {
                HttpClient client = new HttpClient();
                HttpRequestMessage requestMessage = new HttpRequestMessage();
                requestMessage.Content = JsonContent.Create(new
                {
                    clientId = "a7c32c59a02db14c68f27b026c75e6b6",
                    clientSecret = "fac2276dcb1d21eb57450fee25566108916fc6611e9e21ab1fc10509f84a2da6",
                    script = input.code,
                    language = input.language,
                    versionIndex = input.versionIndex
                });
                requestMessage.Method = HttpMethod.Post;
                requestMessage.RequestUri = new Uri("https://api.jdoodle.com/v1/execute");

                var response = await client.SendAsync(requestMessage);
                var responseString = await response.Content.ReadAsStringAsync();
                actionResult = Ok(responseString);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }
    }
}
