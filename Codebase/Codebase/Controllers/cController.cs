using Codebase.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Codebase.Controllers
{
    public class cController : Controller
    {
        private readonly ILogger<cController> _logger;

        public cController(ILogger<cController> logger)
        {
            _logger = logger;
        }

        public IActionResult Home(string? search = null)
        {
            ViewBag.Search = search;
            return View();
        }

        public IActionResult Snippet(Guid id)
        {
            ViewBag.Id = id;
            return View();
        }

        public IActionResult User(Guid? id = null)
        {
            ViewBag.Id = id;
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}