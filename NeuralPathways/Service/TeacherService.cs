using NeuralPathways.Models;
using NeuralPathways.Repository.Abstract;
using NeuralPathways.Service.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Service
{
    public class TeacherService : ITeacherService
    {
        private readonly ITeacherRepository _teacherRepository;
        private readonly string stepOneCorrectAnswer = "d";
        private readonly string stepTwoCorrectAnswer = "a";
        private readonly string stepThreeCorrectAnswer = "c";

        public TeacherService(ITeacherRepository teacherRepository)
        {
            _teacherRepository = teacherRepository;
        }

        /// <summary>
        /// Retreives the entire list of Students
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<User>> ListOfStudentsGetAsync()
        {
            return await _teacherRepository.GetEntireStudentListAsync();
        }

        public async Task<Quiz> AssignStudentQuizAsync(User user)
        {
            var quiz = await CreateQuiz();
            string studentId = user.Id;
            quiz.AssignedStudentsId = studentId;

            return await _teacherRepository.AssignStudentQuizAsync(quiz);
        }

        public async Task<Quiz> CreateQuiz()
        {
            var quiz = new Quiz();

            Question questionOne = await CreateQuestion();
            quiz.QuestionOneId = questionOne.Id;

            Question questionTwo = await CreateQuestion();
            quiz.QuestionTwoId = questionTwo.Id;

            Question questionThree = await CreateQuestion();
            quiz.QuestionThreeId = questionThree.Id;

            return quiz;
        }

        public async Task<Question> CreateQuestion()
        {
            var question = new Question();

            string questionVariableB = PopulateQuestionVariableB();
            question.QuestionVariableB = questionVariableB;

            string questionVariableA = PopulateQuestionVariableA(questionVariableB);
            question.QuestionVariableA = questionVariableA;

            string questionVariableC = PopulateQuestionVariableC();
            question.QuestionVariableC = questionVariableC;

            question.QuestionVariableD = "1";

            question.QuestionVariableE = (questionVariableA + "/" + questionVariableB);

            string questionVariableF = (int.Parse(questionVariableA) / int.Parse(questionVariableB)).ToString();
            question.QuestionVariableF = questionVariableF;

            question.QuestionVariableG = (int.Parse(questionVariableA) + int.Parse(questionVariableC)).ToString();

            question.QuestionVariableH = (int.Parse(questionVariableA) * int.Parse(questionVariableB)).ToString();

            question.QuestionVariableI = (int.Parse(questionVariableB) * 2).ToString();

            question.QuestionVariableJ = (int.Parse(questionVariableF) - int.Parse(questionVariableC)).ToString();

            question.QuestionVariableK = (int.Parse(questionVariableC) * 2).ToString();

            question.QuestionVariableL = (int.Parse(questionVariableF) + int.Parse(questionVariableC)).ToString();

            question.QuestionVariableM = "1";

            return await _teacherRepository.MakeNewQuestionAsync(question);
        }

        public string PopulateQuestionVariableB()
        {
            Random random = new Random();
            return random.Next(1, 10).ToString();
        }

        public string PopulateQuestionVariableA(string questionVariableB)
        {
            Random random = new Random();
            int multiplier = random.Next(1, 5);
            return (multiplier * int.Parse(questionVariableB)).ToString();
        }

        public string PopulateQuestionVariableC()
        {
            Random random = new Random();
            return random.Next(1, 50).ToString();
        }
    }
}
