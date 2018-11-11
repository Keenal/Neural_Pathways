using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NeuralPathways.Models;

namespace NeuralPathways.Service.Abstract
{
    public interface IUserService
    {
        Task<User> UserProfileCreateAsync(User user);

        Task<User> GetUserByEmailAsync(string email);

        Task<User> GetUserByIdAsync(string Id);

        Task<User> UserProfileUpdateAsync(User user);

        Task UserProfileDeleteByEmailAsync(string email);

        Task<User> UserLoginAsync(string email, string password);
    }
}
