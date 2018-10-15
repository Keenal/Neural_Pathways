using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NeuralPathways.Models;
using NeuralPathways.Repository.Abstract;
using NeuralPathways.Service.Abstract;

namespace NeuralPathways.Service
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> UserProfileCreateAsync(User user)
        {
            return await _userRepository.UserProfileCreateAsync(user);
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            return await _userRepository.GetUserByEmailAsync(email);
        }

        public async Task<User> GetUserByIdAsync(string id)
        {
            return await _userRepository.GetUserByIdAsync(id);
        }

        public async Task<User> UserProfileUpdateAsync(User user)
        {
            return await _userRepository.UserProfileUpdateAsync(user);
        }

        public async Task UserProfileDeleteByEmailAsync(string email)
        {
            await _userRepository.UserProfileDeleteByEmailAsync(email);
        }

        public async Task<User> UserLoginAsync(User user)
        {
            return await _userRepository.GetUserByEmailAsync(user.Email);
        }
    }
}
