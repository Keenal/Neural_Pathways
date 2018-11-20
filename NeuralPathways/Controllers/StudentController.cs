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
    [Route("api/Student")]
    public class StudentController : Controller
    {
        private readonly IStudentService _studentService;

        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet("getStudentsAssignedQuizzes")]
        [ProducesResponseType(typeof(IList<Quiz>), 200)]
        public async Task<IActionResult> GetStudentsAssignedQuizzes()
        {
            var listOfStudentsAssignedQuizzes = await _studentService.GetStudentsAssignedQuizzesAsync();
            return Ok(listOfStudentsAssignedQuizzes);
        }

        [HttpPost("getQuestions")]
        public async Task<IActionResult> GetQuestionAsync([FromBody] Quiz quiz)
        {
            var questions = await _studentService.GetQuestionsAsync(quiz);
            return Ok(questions);
        }

        [HttpPost("studentSelectQuiz")]
        public async Task<IActionResult> StudentSelectQuizAsync([FromBody] Quiz quiz)
        {
            var returnedQuiz = await _studentService.StudentSelectQuizAsync(quiz);
            return Ok(returnedQuiz);
        }

        [HttpPost("getRequestedQuestionSelectedQuiz")]
        public async Task<IActionResult> GetRequestedQuestionSelectedQuiz([FromBody] QuestionNumber qn)
        {
            var question = await _studentService.GetRequestedQuestionSelectedQuiz(qn);
            return Ok(question);
        }

        [HttpPost("answerQuestion")]
        public async Task AnswerQuestionAsync([FromBody] Question question)
        {
            await _studentService.AnswerQuestionAsync(question);
        }

        [HttpGet("gradeQuiz")]
        [ProducesResponseType(typeof(Quiz), 200)]
        public async Task<IActionResult> GradeQuizAsync()
        {
            var gradedQuiz = await _studentService.GradeQuizAsync(); 
            return Ok(gradedQuiz);
        }
    }
}
