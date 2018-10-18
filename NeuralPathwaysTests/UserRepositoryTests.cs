using System;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NeuralPathways.Models;
using NeuralPathways.Repository;
using NeuralPathways.Repository.Abstract;

namespace NeuralPathwaysTests
{
    [TestClass]
    public class UserRepositoryTests : BaseTest
    {
        private readonly IUserRepository _userRepository;

        public UserRepositoryTests()
        {
            _userRepository = new UserRepository(_connection);
        }

        [TestMethod]
        public async Task UserProfileCreateAsync_ShouldPopulateDatabaseWithUserAndReturnThatUser()
        {
            //ARRANGE
            var user = new User()
            {
                Email = "test@test.com",
                Password = "TestPassword",
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                Role = "Tester"
            };


            //ACT
            User retrievedUser = await _userRepository.UserProfileCreateAsync(user);

            //ASSERT
            Assert.AreEqual(user.Email, retrievedUser.Email);
            await _userRepository.UserProfileDeleteByEmailAsync(user.Email);
        }

        [TestMethod]
        public async Task GetUserByEmailAsync_ShouldReturnUser()
        {
            //ARRANGE
            string email = "wesTest@test.com";
            string userId = "B404EB6E-194A-4D79-96CC-083B995D1409";

            //ACT
            User user = await _userRepository.GetUserByEmailAsync(email);

            //ASSERT
            Assert.AreEqual(userId, user.Id);
        }

        [TestMethod]
        public async Task GetUserByIdAsync_ShouldReturnUser()
        {
            //ARRANGE
            string email = "wesTest@test.com";
            string userId = "B404EB6E-194A-4D79-96CC-083B995D1409";

            //ACT
            var user = await _userRepository.GetUserByIdAsync(userId);

            //ASSERT
            Assert.AreEqual(email, user.Email);

        }

        [TestMethod]
        public async Task UserProfileUpdateAsync_ShouldUpdateDatabaseWithNewUserInfoAndReturnThatUser()
        {
            //ARRANGE
            var user = new User()
            {
                Email = "test@test.com",
                Password = "TestPassword",
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                Role = "Tester"
            };
            user = await _userRepository.UserProfileCreateAsync(user);
            var changedEmail = "ChangedEmail@test.com";
            user.Email = changedEmail;

            //ACT
            User retrievedUser = await _userRepository.UserProfileUpdateAsync(user);

            //ASSERT
            Assert.AreEqual(retrievedUser.Email, changedEmail);
            await _userRepository.UserProfileDeleteByEmailAsync(user.Email);
        }

        [TestMethod]
        [ExpectedException(typeof(NullReferenceException))]
        public async Task UserProfileDeleteAsync_ShouldDeleteUserFromDatabase()
        {
            //ARRANGE
            var user = new User()
            {
                Email = "test@test.com",
                Password = "TestPassword",
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                Role = "Tester"
            };
            user = await _userRepository.UserProfileCreateAsync(user);

            //ACT
            await _userRepository.UserProfileDeleteByEmailAsync(user.Email);
            user = await _userRepository.GetUserByEmailAsync(user.Email);

            //ASSERT
            Assert.AreEqual("test@test.com", user.Email);
        }
    }
}
