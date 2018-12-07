using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using NeuralPathways.Models;
using NeuralPathways.Repository.Abstract;
using NeuralPathways.Service;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NeuralPathwaysTests
{
    [TestClass]
    public class UserServiceTests : BaseTest
    {
        private readonly UserService _sut;
        private readonly Mock<IUserRepository> _userRepositoryMock;
        private User user;

        public UserServiceTests()
        {
            //Mock dependancies
            _userRepositoryMock = new Mock<IUserRepository>();

            //Construct system under test (sut)
            _sut = new UserService(_userRepositoryMock.Object);
        }

        [TestInitialize]
        public void Initialize()
        {
            user = new User();
            user.Email = "UserServiceTest@email.com";
            user.FirstName = "FirstName";
            user.LastName = "LastName";
            user.Password = "password";
            user.Role = "student";
        }

        [TestMethod]
        public async Task UserProfileCreateAsync_ShouldPopulateDatabaseWithUserAndReturnThatUser()
        {
            //ARRANGE
            _userRepositoryMock.Setup(_userRepositoryMock => _userRepositoryMock.UserProfileCreateAsync(user)).Returns(Task.FromResult(user));

            //ACT
            await _sut.UserProfileCreateAsync(user);


            //ASSERT
            _userRepositoryMock.Verify((_userRepositoryMock => _userRepositoryMock.UserProfileCreateAsync(user)), Times.Once);
        }
    }
}