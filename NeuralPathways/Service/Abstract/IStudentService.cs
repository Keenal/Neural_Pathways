using NeuralPathways.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Service.Abstract
{
    public interface IStudentService
    {
        Task<IEnumerable<Quiz>> GetStudentsAssignedQuizzesAsync();
    }
}
