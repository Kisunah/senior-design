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
        [Route("/codebase/insertData")]
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
    }
}
