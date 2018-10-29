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
        public IEnumerable<User> GetListOfAllStudents()
        {
            var listOfTutors = _teacherService.ListOfStudentsGetAsync();
            return (IEnumerable<User>)listOfTutors;
        }

        [HttpPost("assignStudentQuiz")]
        public async Task<IActionResult> AssignStudentQuizAsync([FromBody] User user)
        {
            return Ok(await _teacherService.AssignStudentQuizAsync(user));
        }
    }
}
