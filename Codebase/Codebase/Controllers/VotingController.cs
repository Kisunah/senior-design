using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Codebase.Managers;
using Codebase.InputOutput;

namespace Codebase.Controllers
{
    public class VotingController
    {
        private readonly ILogger<VotingController> _logger;

        private readonly VotingManager votingManager;

        public VotingController(ILogger<VotingController> logger)
        {
            _logger = logger;
            votingManager = new VotingManager();
        }

        [HttpPost]
        [Route("/codebase/{codeGuid}/{postType}/upVote")]
        [ProducesResponseType(typeof(void), 204)]
        [Produces("application/json")]

        public async Task<IActionResult> upVoteAsync
            (
            [FromRoute] string codeGuid,
            [FromRoute] string postType
            )
        {
            IActionResult actionResult;
            try
            {
                await votingManager.upVoteAsync(codeGuid, postType);
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
