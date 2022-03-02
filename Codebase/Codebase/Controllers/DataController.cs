using Microsoft.AspNetCore.Mvc;
using Codebase.Managers;
using Codebase.InputOutput;
using System.Web;

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
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
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
        [ProducesResponseType(typeof(void), 200)]
        [Produces("application/json")]
        public async Task<IActionResult> getCodeblocksAsync([FromBody]  GetCodeblocksInput input)
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
    }
}
