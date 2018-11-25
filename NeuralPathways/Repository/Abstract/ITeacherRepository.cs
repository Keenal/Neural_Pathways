using NeuralPathways.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Repository.Abstract
{
    public interface ITeacherRepository
    {
        Task<User> GetStudentByEmailAsync(string email);

        Task<IEnumerable<User>> GetEntireStudentListAsync();

        Task<Quiz> AssignStudentQuizAsync(Quiz quiz);

        Task<Question> MakeNewQuestionAsync(Question question);

        Task<IEnumerable<Quiz>> GetGradedQuizzesAsync();
    }
}
