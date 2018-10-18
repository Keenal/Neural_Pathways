using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NeuralPathways.Models;
using NeuralPathways.Repository.Abstract;
using Dapper;

namespace NeuralPathways.Repository
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(string connection) : base(connection)
        {

        }

        public async Task<User> UserProfileCreateAsync(User user)
        {
            var parameters = new DynamicParameters();

            //Adds to Parameters
            parameters.Add("Email", user.Email);
            parameters.Add("Password", user.Password);
            parameters.Add("FirstName", user.FirstName);
            parameters.Add("LastName", user.LastName);
            parameters.Add("Role", user.Role);

            return await FirstJsonResultAsync<User>("createUser", parameters);
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            var parameters = new DynamicParameters();

            parameters.Add("Email", email);

            return await FirstJsonResultAsync<User>("readUserByEmail", parameters);
        }

        public async Task<User> GetUserByIdAsync(string id)
        {
            var parameters = new DynamicParameters();

            parameters.Add("Id", id);

            return await FirstJsonResultAsync<User>("readUserById", parameters);
        }

        public async Task<User> UserProfileUpdateAsync(User user)
        {
            var parameters = new DynamicParameters();

            parameters.Add("Id", user.Id);
            parameters.Add("Email", user.Email);
            parameters.Add("FirstName", user.FirstName);
            parameters.Add("LastName", user.LastName);
            parameters.Add("Role", user.Role);

            return await FirstJsonResultAsync<User>("updateUserProfileById", parameters);
        }

        public async Task UserProfileDeleteByEmailAsync(string email)
        {
            var parameters = new DynamicParameters();

            parameters.Add("Email", email);

            await ExecuteAsync("deleteUserByEmail", parameters);
        }
    }
}
