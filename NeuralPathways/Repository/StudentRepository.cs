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
    }
}
