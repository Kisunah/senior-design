using Microsoft.AspNetCore.Mvc;
using Codebase.Managers;
using Codebase.InputOutput;

namespace Codebase.Controllers
{
    public class DataController
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
            catch(Exception ex)
            {
                _logger.LogError(ex.Message);
                throw new Exception(ex.Message);
            }
            return actionResult;
        }

        [HttpPost]
        [Route("/codebase/indexData")]
        [ProducesResponseType(typeof(void), 204)]
        [Produces("application/json")]
        public async Task<IActionResult> InsertDataAsync(
            [FromBody] DataInput input)
        {
            IActionResult actionResult;
            try
            {
                await dataManager.InsertData(input);
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

        [HttpPost]
        [Route("/codebase/{codeblockGuid}/upVote")]
        [ProducesResponseType(typeof(void), 204)]
        [Produces("application/json")]
        public async Task<IActionResult> upVoteAsync(
            [FromRoute] string codeblockGuid)
        {
            IActionResult actionResult;
            try
            {
                await dataManager.UpVote(codeblockGuid);
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
        [Route("/codebase/{codeblockGuid}/downVote")]
        [ProducesResponseType(typeof(void), 204)]
        [Produces("application/json")]
        public async Task<IActionResult> downVoteAsync(
            [FromRoute] string codeblockGuid)
        {
            IActionResult actionResult;
            try
            {
                await dataManager.DownVote(codeblockGuid);
                actionResult = new NoContentResult();
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
