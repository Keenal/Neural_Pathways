using NeuralPathways.Models;
using NeuralPathways.Repository.Abstract;
using NeuralPathways.Service.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Service
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _studentRepository;

        public StudentService(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        /// <summary>
        /// Retreives list of Students assigned quizzes
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<Quiz>> GetStudentsAssignedQuizzesAsync()
        {
            return await _studentRepository.GetStudentsAssignedQuizzesAsync();
        }
        
        /// <summary>
        /// Retreives a list of Questions by quizId
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<Question>> GetQuestionsAsync(Quiz quiz)
        {
            return await _studentRepository.GetQuestionsAsync(quiz);
        }
    }
}
