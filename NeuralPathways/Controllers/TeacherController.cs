using Microsoft.AspNetCore.Mvc;
using NeuralPathways.Models;
using NeuralPathways.Service.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Controllers
{
    [Produces("application/json")]
    [Route("api/Teacher")]
    public class TeacherController : Controller
    {
        private readonly ITeacherService _teacherService;

        public TeacherController(ITeacherService teacherService)
        {
            _teacherService = teacherService;
        }

        // GET: api/Teacher/GetListOfAllStudents
        [HttpGet]
        [ProducesResponseType(typeof(IList<User>), 200)]
        public async Task<IActionResult> GetListOfAllStudents()
        {
            var stuff = await _teacherService.ListOfStudentsGetAsync();
            return Ok(stuff);
        }

        [HttpPost("assignStudentQuiz")]
        public async Task<IActionResult> AssignStudentQuizAsync([FromBody] User user)
        {
            return Ok(await _teacherService.AssignStudentQuizAsync(user));
        }

        
        [HttpGet("getGradedQuizzes")]
        [ProducesResponseType(typeof(IList<Quiz>), 200)]
        public async Task<IActionResult> GetGradedQuizzesAsync()
        {
            var listOfStudentsGradedQuizzes = await _teacherService.GetGradedQuizzesAsync();
            return Ok(listOfStudentsGradedQuizzes);
        }

        [HttpGet("getReportInfo")]
        [ProducesResponseType(typeof(ReportInfo), 200)]
        public async Task<IActionResult> GetReportInfoAsync()
        {
            var reportInfo = await _teacherService.GetReportInfoAsync();
            return Ok(reportInfo);
        }
    }
}
