using Dapper;
using NeuralPathways.Models;
using NeuralPathways.Repository.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Repository
{
    public class StudentRepository : BaseRepository, IStudentRepository
    {
        public StudentRepository(string connection) : base(connection)
        {

        }

        /// <summary>
        /// Retrieves list of Students assigned quizzes from DB
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<Quiz>> GetStudentsAssignedQuizzesAsync()
        {
            string loggedInUserId = loggedInUser.Id;

            //Initializes Parameters for Stored Procedure
            var parameters = new DynamicParameters();
            parameters.Add("Id", loggedInUserId);

            return await JsonResultAsync<Quiz>("readStudentsAssignedQuizzes", parameters);
        }

        /// <summary>
        /// Retrieves a list of Questions by its quizId
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<Question>> GetQuestionsAsync(Quiz quiz)
        {
            var questionOneId = quiz.QuestionOneId;
            var questionTwoId = quiz.QuestionTwoId;
            var questionThreeId = quiz.QuestionThreeId;

            //Initializes Parameters for Stored Procedure
            var parameters = new DynamicParameters();
            parameters.Add("QuestionOneId", questionOneId);
            parameters.Add("QuestionTwoId", questionTwoId);
            parameters.Add("QuestionThreeId", questionThreeId);

            return await JsonResultAsync<Question>("readQuestionsByQuestionIds", parameters);
        }

        public async Task<Quiz> StudentSelectQuizAsync(Quiz quiz)
        {
            studentSelectedQuiz = quiz;
            var questions = await GetQuestionsAsync(quiz);

            var questionsList = questions.ToList();
            selectedQuizQuestionOne = questions.ElementAt(0);
            selectedQuizQuestionTwo = questions.ElementAt(1);
            selectedQuizQuestionThree = questions.ElementAt(2);

            return quiz;
        }

        public async Task<Question> GetRequestedQuestionSelectedQuiz(QuestionNumber questionNumber)
        {
            int convertedQuestionNumber = int.Parse(questionNumber.Number);

            if (convertedQuestionNumber == 1)
            {
                return selectedQuizQuestionOne;
            }
            else if (convertedQuestionNumber == 2)
            {
                return selectedQuizQuestionTwo;
            }
            else
            {
                return selectedQuizQuestionThree;
            }
        }

        public async Task<Question> AnswerQuestionAsync(Question question)
        {
            //Initializes Parameters for Stored Procedure
            var parameters = new DynamicParameters();
            parameters.Add("Id", question.Id);
            if (question.StepOneAnswer != null)
            {
                parameters.Add("StepOneAnswer", question.StepOneAnswer);
            }
            if (question.StepTwoAnswer != null)
            {
                parameters.Add("StepTwoAnswer", question.StepTwoAnswer);
            }
            if (question.StepThreeAnswer != null)
            {
                parameters.Add("StepThreeAnswer", question.StepThreeAnswer);
            }

            return await FirstJsonResultAsync<Question>("updateQuestionById", parameters);
        }
    }
}
