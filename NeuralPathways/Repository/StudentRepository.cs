using Dapper;
using NeuralPathways.Models;
using NeuralPathways.Repository.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Repository
{
    public class StudentRepository : BaseRepository, IStudentRepository
    {
        public StudentRepository(string connection) : base(connection)
        {

        }

        /// <summary>
        /// Retrieves list of Students assigned quizzes from DB
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<Quiz>> GetStudentsAssignedQuizzesAsync()
        {
            string loggedInUserId = loggedInUser.Id;

            //Initializes Parameters for Stored Procedure
            var parameters = new DynamicParameters();
            parameters.Add("Id", loggedInUserId);

            return await JsonResultAsync<Quiz>("readStudentsAssignedQuizzes", parameters);
        }

        /// <summary>
        /// Retrieves a list of Questions by its quizId
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<Question>> GetQuestionsAsync(Quiz quiz)
        {
            var questionOneId = quiz.QuestionOneId;
            var questionTwoId = quiz.QuestionTwoId;
            var questionThreeId = quiz.QuestionThreeId;

            //Initializes Parameters for Stored Procedure
            var parameters = new DynamicParameters();
            parameters.Add("QuestionOneId", questionOneId);
            parameters.Add("QuestionTwoId", questionTwoId);
            parameters.Add("QuestionThreeId", questionThreeId);

            return await JsonResultAsync<Question>("readQuestionsByQuestionIds", parameters);
        }

        public async Task<Quiz> StudentSelectQuizAsync(Quiz quiz)
        {
            studentSelectedQuiz = quiz;
            var questions = await GetQuestionsAsync(quiz);

            foreach (Question question in questions)
            {
                if (question.Id == quiz.QuestionOneId)
                {
                    selectedQuizQuestionOne = question;
                }
                if (question.Id == quiz.QuestionTwoId)
                {
                    selectedQuizQuestionTwo = question;
                }
                if (question.Id == quiz.QuestionThreeId)
                {
                    selectedQuizQuestionThree = question;
                }
            }

            return quiz;
        }

        public async Task<Question> GetRequestedQuestionSelectedQuiz(QuestionNumber questionNumber)
        {
            int convertedQuestionNumber = int.Parse(questionNumber.Number);

            if (convertedQuestionNumber == 1)
            {
                return selectedQuizQuestionOne;
            }
            else if (convertedQuestionNumber == 2)
            {
                return selectedQuizQuestionTwo;
            }
            else
            {
                return selectedQuizQuestionThree;
            }
        }

        public async Task AnswerQuestionAsync(Question question)
        {
            if (selectedQuizQuestionOne.Id == question.Id)
            {
                selectedQuizQuestionOne.StepOneAnswer = question.StepOneAnswer;
                selectedQuizQuestionOne.StepTwoAnswer = question.StepTwoAnswer;
                selectedQuizQuestionOne.StepThreeAnswer = question.StepThreeAnswer;
            }
            if (selectedQuizQuestionTwo.Id == question.Id)
            {
                selectedQuizQuestionTwo.StepOneAnswer = question.StepOneAnswer;
                selectedQuizQuestionTwo.StepTwoAnswer = question.StepTwoAnswer;
                selectedQuizQuestionTwo.StepThreeAnswer = question.StepThreeAnswer;
            }
            if (selectedQuizQuestionThree.Id == question.Id)
            {
                selectedQuizQuestionThree.StepOneAnswer = question.StepOneAnswer;
                selectedQuizQuestionThree.StepTwoAnswer = question.StepTwoAnswer;
                selectedQuizQuestionThree.StepThreeAnswer = question.StepThreeAnswer;
            }

            //Initializes Parameters for Stored Procedure
            var parameters = new DynamicParameters();
            parameters.Add("Id", question.Id);
            parameters.Add("StepOneAnswer", question.StepOneAnswer);
            parameters.Add("StepTwoAnswer", question.StepTwoAnswer);
            parameters.Add("StepThreeAnswer", question.StepThreeAnswer);

            await FirstJsonResultAsync<Question>("updateQuestionById", parameters);
        }

        public async Task<Quiz> GradeQuizAsync()
        {
            var studentSelectedQuizId = studentSelectedQuiz.Id;
            var quizGrade = 0;

            var questionOneGrade = GradeQuestionOne();
            var questionTwoGrade = GradeQuestionTwo();
            var questionThreeGrade = GradeQuestionThree();

            if ((questionOneGrade == 0) && (questionTwoGrade == 0) && (questionThreeGrade == 0))
            {
                quizGrade = 100;
            }
            else if ((questionOneGrade > 0) && (questionTwoGrade > 0) && (questionThreeGrade == 0))
            {
                quizGrade = 90;
            }
            else if ((questionOneGrade <= 1) && (questionTwoGrade <= 1) && (questionThreeGrade == 1))
            {
                quizGrade = 66;
            }
            else if ((questionOneGrade > 1) && (questionTwoGrade == 1) && (questionThreeGrade == 1))
            {
                quizGrade = 70;
            }
            else if ((questionOneGrade > 1) && (questionTwoGrade > 1) && (questionThreeGrade == 1))
            {
                quizGrade = 80;
            }
            else if ((questionOneGrade <= 2) && (questionTwoGrade <= 2) && (questionThreeGrade == 2))
            {
                quizGrade = 33;
            }
            else if ((questionOneGrade > 2) && (questionTwoGrade == 2) && (questionThreeGrade == 2))
            {
                quizGrade = 40;
            }
            else if ((questionOneGrade > 2) && (questionTwoGrade > 2) && (questionThreeGrade == 2))
            {
                quizGrade = 50;
            }
            else
            {
                quizGrade = 0;
            }

            var parameters = new DynamicParameters();
            parameters.Add("Id", studentSelectedQuizId);
            parameters.Add("Grade", quizGrade.ToString());

            return await FirstJsonResultAsync<Quiz>("updateQuizGradeById", parameters);
        }

        public int GradeQuestionOne()
        {
            var numberOfStepsCorrect = 0;
            var numberOfStepsWrong = 3;

            if (selectedQuizQuestionOne.StepOneAnswer == selectedQuizQuestionOne.StepOneCorrectAnswer)
            {
                numberOfStepsCorrect++;
            }
            if (selectedQuizQuestionOne.StepTwoAnswer == selectedQuizQuestionOne.StepTwoCorrectAnswer)
            {
                numberOfStepsCorrect++;
            }
            if (selectedQuizQuestionOne.StepThreeAnswer == selectedQuizQuestionOne.StepThreeCorrectAnswer)
            {
                numberOfStepsCorrect++;
            }

            return (numberOfStepsWrong - numberOfStepsCorrect);
        }

        public int GradeQuestionTwo()
        {
            var numberOfStepsCorrect = 0;
            var numberOfStepsWrong = 3;

            if (selectedQuizQuestionTwo.StepOneAnswer == selectedQuizQuestionTwo.StepOneCorrectAnswer)
            {
                numberOfStepsCorrect++;
            }
            if (selectedQuizQuestionTwo.StepTwoAnswer == selectedQuizQuestionTwo.StepTwoCorrectAnswer)
            {
                numberOfStepsCorrect++;
            }
            if (selectedQuizQuestionTwo.StepThreeAnswer == selectedQuizQuestionTwo.StepThreeCorrectAnswer)
            {
                numberOfStepsCorrect++;
            }

            return (numberOfStepsWrong - numberOfStepsCorrect);
        }

        public int GradeQuestionThree()
        {
            var numberOfStepsCorrect = 0;
            var numberOfStepsWrong = 3;

            if (selectedQuizQuestionThree.StepOneAnswer == selectedQuizQuestionThree.StepOneCorrectAnswer)
            {
                numberOfStepsCorrect++;
            }
            if (selectedQuizQuestionThree.StepTwoAnswer == selectedQuizQuestionThree.StepTwoCorrectAnswer)
            {
                numberOfStepsCorrect++;
            }
            if (selectedQuizQuestionThree.StepThreeAnswer == selectedQuizQuestionThree.StepThreeCorrectAnswer)
            {
                numberOfStepsCorrect++;
            }

            return (numberOfStepsWrong - numberOfStepsCorrect);
        }
    }
}
