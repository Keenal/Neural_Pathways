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
            var quiz = CreateQuiz();
            var studentId = user.Id;
            quiz.AssignedStudentsId = studentId;

            return await _teacherRepository.AssignStudentQuizAsync(quiz);
        }

        public Quiz CreateQuiz()
        {
            var quiz = new Quiz
            {
                QuestionA = CreateQuestion(),
                QuestionB = CreateQuestion(),
                QuestionC = CreateQuestion()
            };
            return quiz;
        }

        public Question CreateQuestion()
        {
            var question = new Question();

            int questionVariableB = PopulateQuestionVariableB();
            question.QuestionVariableB = questionVariableB;

            int questionVariableA = PopulateQuestionVariableA(questionVariableB);
            question.QuestionVariableA = questionVariableA;

            int questionVariableC = PopulateQuestionVariableC();
            question.QuestionVariableC = questionVariableC;

            question.QuestionVariableD = 1;

            question.QuestionVariableE = (questionVariableA.ToString() + "/" + questionVariableB.ToString());

            int questionVariableF = (questionVariableA / questionVariableB);
            question.QuestionVariableF = questionVariableF;

            question.QuestionVariableG = (questionVariableA + questionVariableC);

            question.QuestionVariableH = (questionVariableA * questionVariableB);

            question.QuestionVariableI = (questionVariableB * 2);

            question.QuestionVariableJ = (questionVariableF - questionVariableC);

            question.QuestionVariableK = (questionVariableC * 2);

            question.QuestionVariableL = (questionVariableF + questionVariableC);

            question.QuestionVariableM = 1;

            return question;
        }

        public int PopulateQuestionVariableB()
        {
            Random random = new Random();
            return random.Next(1, 10);
        }

        public int PopulateQuestionVariableA(int questionVariableB)
        {
            Random random = new Random();
            int multiplier = random.Next(1, 5);
            return (multiplier * questionVariableB);
        }

        public int PopulateQuestionVariableC()
        {
            Random random = new Random();
            return random.Next(1, 50);
        }
    }
}
