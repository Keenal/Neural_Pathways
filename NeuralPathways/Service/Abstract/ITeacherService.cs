using NeuralPathways.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Service.Abstract
{
    public interface ITeacherService
    {
        Task<IEnumerable<User>> ListOfStudentsGetAsync();

        Task<Quiz> AssignStudentQuizAsync(User user);
    }
}
