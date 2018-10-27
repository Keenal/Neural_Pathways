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
            parameters.Add("QuizAssignedStudentsId", quiz.AssignedStudentsId);

            parameters.Add("QuizQuestionA.Id", quiz.QuestionA.Id);
            parameters.Add("QuizQuestionAQuestionVariableA", quiz.QuestionA.QuestionVariableA);
            parameters.Add("QuizQuestionAQuestionVariableB", quiz.QuestionA.QuestionVariableB);
            parameters.Add("QuizQuestionAQuestionVariableC", quiz.QuestionA.QuestionVariableC);
            parameters.Add("QuizQuestionAQuestionVariableD", quiz.QuestionA.QuestionVariableD);
            parameters.Add("QuizQuestionAQuestionVariableE", quiz.QuestionA.QuestionVariableE);
            parameters.Add("QuizQuestionAQuestionVariableF", quiz.QuestionA.QuestionVariableF);
            parameters.Add("QuizQuestionAQuestionVariableG", quiz.QuestionA.QuestionVariableG);
            parameters.Add("QuizQuestionAQuestionVariableH", quiz.QuestionA.QuestionVariableH);
            parameters.Add("QuizQuestionAQuestionVariableI", quiz.QuestionA.QuestionVariableI);
            parameters.Add("QuizQuestionAQuestionVariableJ", quiz.QuestionA.QuestionVariableJ);
            parameters.Add("QuizQuestionAQuestionVariableK", quiz.QuestionA.QuestionVariableI);
            parameters.Add("QuizQuestionAQuestionVariableL", quiz.QuestionA.QuestionVariableL);
            parameters.Add("QuizQuestionAQuestionVariableM", quiz.QuestionA.QuestionVariableM);

            parameters.Add("QuizQuestionB.Id", quiz.QuestionB.Id);
            parameters.Add("QuizQuestionBQuestionVariableA", quiz.QuestionB.QuestionVariableA);
            parameters.Add("QuizQuestionBQuestionVariableB", quiz.QuestionB.QuestionVariableB);
            parameters.Add("QuizQuestionBQuestionVariableC", quiz.QuestionB.QuestionVariableC);
            parameters.Add("QuizQuestionBQuestionVariableD", quiz.QuestionB.QuestionVariableD);
            parameters.Add("QuizQuestionBQuestionVariableE", quiz.QuestionB.QuestionVariableE);
            parameters.Add("QuizQuestionBQuestionVariableF", quiz.QuestionB.QuestionVariableF);
            parameters.Add("QuizQuestionBQuestionVariableG", quiz.QuestionB.QuestionVariableG);
            parameters.Add("QuizQuestionBQuestionVariableH", quiz.QuestionB.QuestionVariableH);
            parameters.Add("QuizQuestionBQuestionVariableI", quiz.QuestionB.QuestionVariableI);
            parameters.Add("QuizQuestionBQuestionVariableJ", quiz.QuestionB.QuestionVariableJ);
            parameters.Add("QuizQuestionBQuestionVariableK", quiz.QuestionB.QuestionVariableI);
            parameters.Add("QuizQuestionBQuestionVariableL", quiz.QuestionB.QuestionVariableL);
            parameters.Add("QuizQuestionBQuestionVariableM", quiz.QuestionB.QuestionVariableM);

            parameters.Add("QuizQuestionC.Id", quiz.QuestionC.Id);
            parameters.Add("QuizQuestionCQuestionVariableA", quiz.QuestionC.QuestionVariableA);
            parameters.Add("QuizQuestionCQuestionVariableB", quiz.QuestionC.QuestionVariableB);
            parameters.Add("QuizQuestionCQuestionVariableC", quiz.QuestionC.QuestionVariableC);
            parameters.Add("QuizQuestionCQuestionVariableD", quiz.QuestionC.QuestionVariableD);
            parameters.Add("QuizQuestionCQuestionVariableE", quiz.QuestionC.QuestionVariableE);
            parameters.Add("QuizQuestionCQuestionVariableF", quiz.QuestionC.QuestionVariableF);
            parameters.Add("QuizQuestionCQuestionVariableG", quiz.QuestionC.QuestionVariableG);
            parameters.Add("QuizQuestionCQuestionVariableH", quiz.QuestionC.QuestionVariableH);
            parameters.Add("QuizQuestionCQuestionVariableI", quiz.QuestionC.QuestionVariableI);
            parameters.Add("QuizQuestionCQuestionVariableJ", quiz.QuestionC.QuestionVariableJ);
            parameters.Add("QuizQuestionCQuestionVariableK", quiz.QuestionC.QuestionVariableI);
            parameters.Add("QuizQuestionCQuestionVariableL", quiz.QuestionC.QuestionVariableL);
            parameters.Add("QuizQuestionCQuestionVariableM", quiz.QuestionC.QuestionVariableM);

            return await FirstJsonResultAsync<Quiz>("assignQuizToStudent", parameters);
        }
    }
}
