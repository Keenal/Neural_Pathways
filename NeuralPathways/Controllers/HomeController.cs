using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NeuralPathways.Repository;

namespace NeuralPathways.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            //BaseRepository test = new BaseRepository();

            //test.TestConnection();

            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
