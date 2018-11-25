using Dapper;
using NeuralPathways.Models;
using NeuralPathways.Repository.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Repository
{
    public class TeacherRepository : BaseRepository, ITeacherRepository
    {
        public TeacherRepository(string connection) : base(connection)
        {

        }

        /// <summary>
        /// Retrieves a Student from the database by their email address
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        public async Task<User> GetStudentByEmailAsync(string email)
        {
            //Initializes Parameters for Stored Procedure
            var parameters = new DynamicParameters();

            //Adds to Parameters
            parameters.Add("Email", email);

            return await FirstJsonResultAsync<User>("readUserByEmail", parameters);
        }

        /// <summary>
        /// Retrieves all Students from the database
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<User>> GetEntireStudentListAsync()
        {
            //Initializes Parameters for Stored Procedure
            var parameters = new DynamicParameters();

            return await JsonResultAsync<User>("readStudentsAll", parameters);
        }

        /// <summary>
        /// Stores a Quiz in the DB after it has been assigned to a student, 
        /// and then sends it back to the front end for the student to complete.
        /// </summary>
        /// <param></param>
        /// <returns></returns>
        public async Task<Quiz> AssignStudentQuizAsync(Quiz quiz)
        {
            //Initializes Parameters for Stored Procedure
            var parameters = new DynamicParameters();

            //Adds to Parameters
            parameters.Add("assignedStudentsId", quiz.AssignedStudentsId);
            parameters.Add("questionOneId", quiz.QuestionOneId);
            parameters.Add("questionTwoId", quiz.QuestionTwoId);
            parameters.Add("questionThreeId", quiz.QuestionThreeId);

            return await FirstJsonResultAsync<Quiz>("createQuiz", parameters);
        }

        public async Task<Question> MakeNewQuestionAsync(Question question)
        {
            //Initializes Parameters for Stored Procedure
            var parameters = new DynamicParameters();

            //Adds to Parameters
            parameters.Add("questionVariableA", question.QuestionVariableA);
            parameters.Add("questionVariableB", question.QuestionVariableB);
            parameters.Add("questionVariableC", question.QuestionVariableC);
            parameters.Add("questionVariableD", question.QuestionVariableD);
            parameters.Add("questionVariableE", question.QuestionVariableE);
            parameters.Add("questionVariableF", question.QuestionVariableF);
            parameters.Add("questionVariableG", question.QuestionVariableG);
            parameters.Add("questionVariableH", question.QuestionVariableH);
            parameters.Add("questionVariableI", question.QuestionVariableI);
            parameters.Add("questionVariableJ", question.QuestionVariableJ);
            parameters.Add("questionVariableK", question.QuestionVariableI);
            parameters.Add("questionVariableL", question.QuestionVariableL);
            parameters.Add("questionVariableM", question.QuestionVariableM);
            parameters.Add("stepOneCorrectAnswer", question.StepOneCorrectAnswer);
            parameters.Add("stepTwoCorrectAnswer", question.StepTwoCorrectAnswer);
            parameters.Add("stepThreeCorrectAnswer", question.StepThreeCorrectAnswer);

            return await FirstJsonResultAsync<Question>("createQuestion", parameters);
        }

        public async Task<IEnumerable<Quiz>> GetGradedQuizzesAsync()
        {
            //Initializes Parameters for Stored Procedure
            var parameters = new DynamicParameters();

            return await JsonResultAsync<Quiz>("readGradedQuizzes", parameters);
        }
    }
}
