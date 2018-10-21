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
    }
}
