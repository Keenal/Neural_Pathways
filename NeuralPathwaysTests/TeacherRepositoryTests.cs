using System;
using System.Data.SqlClient;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NeuralPathways.Models;
using NeuralPathways.Repository;
using NeuralPathways.Repository.Abstract;
using NeuralPathways.Service.Abstract;

namespace NeuralPathwaysTests
{
    [TestClass]
    public class TeacherRepositoryTests : BaseTest
    {
        private readonly IUserRepository _userRepository;
        private readonly ITeacherRepository _teacherRepository;
        private readonly ITeacherService _teacherService;
        User user;

        public TeacherRepositoryTests()
        {
            _userRepository = new UserRepository(_connection);
            _teacherRepository = new TeacherRepository(_connection);
        }

        [TestInitialize]
        public void Initialize()
        {
            user = new User();
            user.Email = "TeacherRepoTest@email.com";
            user.FirstName = "FirstName";
            user.LastName = "LastName";
            user.Password = "password";
            user.Role = "student";

            _userRepository.UserProfileCreateAsync(user);
        }

        [TestMethod]
        public async Task GetStudentByEmailAsync_ShouldReturnStudent()
        {
            //ARRANGE

            //ACT
            User studentUser = await _teacherRepository.GetStudentByEmailAsync(user.Email);

            //ASSERT
            Assert.AreEqual(user.Email, studentUser.Email);
        }

        [TestMethod]
        public async Task GetEntireStudentListAsync_ShouldReturnListOfStudents()
        {
            //ARRANGE
            int students = 0;
            var studentList = await _teacherRepository.GetEntireStudentListAsync();

            //ACT
            foreach (User tutor in studentList)
            {
                students++;
            }

            //ASSERT
            Assert.IsTrue(students > 0, "The students were not greater than 0");
        }

        public void CleanUpAfterTests()
        {
            _userRepository.UserProfileDeleteByEmailAsync(user.Email);
        }
    }
}
