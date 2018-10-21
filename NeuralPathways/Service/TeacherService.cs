using NeuralPathways.Models;
using NeuralPathways.Repository.Abstract;
using NeuralPathways.Service.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Service
{
    public class TeacherService : ITeacherService
    {
        private readonly ITeacherRepository _teacherRepository;

        public TeacherService(ITeacherRepository teacherRepository)
        {
            _teacherRepository = teacherRepository;
        }

        /// <summary>
        /// Retreives the entire list of Students
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<User>> ListOfStudentsGetAsync()
        {
            return await _teacherRepository.GetEntireStudentListAsync();
        }
    }
}
