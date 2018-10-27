using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public Question QuestionA { get; set; }
        public Question QuestionB { get; set; }
        public Question QuestionC { get; set; }
    }
}
