﻿using NeuralPathways.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Repository.Abstract
{
    public interface IStudentRepository
    {
        Task<IEnumerable<Quiz>> GetStudentsAssignedQuizzesAsync();

        Task<IEnumerable<Question>> GetQuestionsAsync(Quiz quiz);

        Task<Quiz> StudentSelectQuizAsync(Quiz quiz);

        Task<Question> GetRequestedQuestionSelectedQuiz(QuestionNumber questionNumber);
    }
}
