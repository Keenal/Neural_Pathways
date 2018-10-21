using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using NeuralPathways.Models;
using NeuralPathways.Repository.Abstract;
using NeuralPathways.Service;

namespace NeuralPathwaysTests
{
    [TestClass]
    public class TeacherServiceTests : BaseTest
    {
        private readonly TeacherService _sut;
        private readonly Mock<IUserRepository> _userRepositoryMock;
        private readonly Mock<ITeacherRepository> _teacherRepositoryMock;
        private User user;
        List<User> mockList;

        public TeacherServiceTests()
        {
            //Mock dependancies
            _userRepositoryMock = new Mock<IUserRepository>();
            _teacherRepositoryMock = new Mock<ITeacherRepository>();

            //Construct system under test (sut)
            _sut = new TeacherService(_teacherRepositoryMock.Object);
        }

        [TestInitialize]
        public void Initialize()
        {
            user = new User();
            user.Email = "TeacherServiceTest@email.com";
            user.FirstName = "FirstName";
            user.LastName = "LastName";
            user.Password = "password";
            user.Role = "student";

            mockList = new List<User>();
            mockList.Add(user);
            }

        [TestMethod]
        public async Task ListOfStudentsGetAsync_ShouldReturnListOfStudents()
        {
            //ARRANGE
            _teacherRepositoryMock.Setup(_teacherRepositoryMock => _teacherRepositoryMock.GetEntireStudentListAsync()).Returns(Task.FromResult((IEnumerable<User>)mockList));
            int students = 0;

            //ACT
            var studentList = await _sut.ListOfStudentsGetAsync();
            foreach (User tutor in studentList)
            {
                students++;
            }

            //ASSERT
            Assert.IsTrue(students > 0, "The students were not greater than 0");
        }
    }
}