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
        private readonly string stepOneCorrectAnswer = "d";
        private readonly string stepTwoCorrectAnswer = "a";
        private readonly string stepThreeCorrectAnswer = "c";

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

        public async Task<Quiz> AssignStudentQuizAsync(User user)
        {
            var quiz = await CreateQuiz();
            string studentId = user.Id;
            quiz.AssignedStudentsId = studentId;

            return await _teacherRepository.AssignStudentQuizAsync(quiz);
        }

        public async Task<Quiz> CreateQuiz()
        {
            var quiz = new Quiz();

            Question questionOne = await CreateQuestion();
            quiz.QuestionOneId = questionOne.Id;

            Question questionTwo = await CreateQuestion();
            quiz.QuestionTwoId = questionTwo.Id;

            Question questionThree = await CreateQuestion();
            quiz.QuestionThreeId = questionThree.Id;

            return quiz;
        }

        public async Task<Question> CreateQuestion()
        {
            var question = new Question();

            string questionVariableB = PopulateQuestionVariableB();
            question.QuestionVariableB = questionVariableB;
            string questionVariableA = PopulateQuestionVariableA(questionVariableB);
            question.QuestionVariableA = questionVariableA;
            string questionVariableC = PopulateQuestionVariableC();
            question.QuestionVariableC = questionVariableC;
            question.QuestionVariableD = "1";
            question.QuestionVariableE = (questionVariableA + "/" + questionVariableB);
            string questionVariableF = (int.Parse(questionVariableA) / int.Parse(questionVariableB)).ToString();
            question.QuestionVariableF = questionVariableF;
            question.QuestionVariableG = (int.Parse(questionVariableA) + int.Parse(questionVariableC)).ToString();
            question.QuestionVariableH = (int.Parse(questionVariableA) * int.Parse(questionVariableB)).ToString();
            question.QuestionVariableI = (int.Parse(questionVariableB) * 2).ToString();
            question.QuestionVariableJ = (int.Parse(questionVariableF) - int.Parse(questionVariableC)).ToString();
            question.QuestionVariableK = (int.Parse(questionVariableC) * 2).ToString();
            question.QuestionVariableL = (int.Parse(questionVariableF) + int.Parse(questionVariableC)).ToString();
            question.QuestionVariableM = "1";

            question.StepOneCorrectAnswer = stepOneCorrectAnswer;
            question.StepTwoCorrectAnswer = stepTwoCorrectAnswer;
            question.StepThreeCorrectAnswer = stepThreeCorrectAnswer;

            return await _teacherRepository.MakeNewQuestionAsync(question);
        }

        public string PopulateQuestionVariableB()
        {
            Random random = new Random();
            return random.Next(2, 10).ToString();
        }

        public string PopulateQuestionVariableA(string questionVariableB)
        {
            Random random = new Random();
            int multiplier = random.Next(1, 5);
            return (multiplier * int.Parse(questionVariableB)).ToString();
        }

        public string PopulateQuestionVariableC()
        {
            Random random = new Random();
            return random.Next(1, 50).ToString();
        }

        public async Task<IEnumerable<Quiz>> GetGradedQuizzesAsync()
        {
            return await _teacherRepository.GetGradedQuizzesAsync();
        }

        public async Task<ReportInfo> GetReportInfoAsync()
        {
            ReportInfo reportInfo = new ReportInfo();
            // Step One
            var timesStepOneMissed = 0;
            var timesStepOneMissedAnsweredA = 0;
            var timesStepOneMissedAnsweredB = 0;
            var timesStepOneMissedAnsweredC = 0;
            // Step Two
            var timesStepTwoMissed = 0;
            var timesStepTwoMissedAnsweredB = 0;
            var timesStepTwoMissedAnsweredC = 0;
            var timesStepTwoMissedAnsweredD = 0;
            // Step Three
            var timesStepThreeMissed = 0;
            var timesStepThreeMissedAnsweredA = 0;
            var timesStepThreeMissedAnsweredB = 0;
            var timesStepThreeMissedAnsweredD = 0;
            // Order by number missed
            var mostMissedStep = "";
            var secondMostMissedStep = "";
            var thirdMostMissedStep = "";
            // Grades
            var averageGrade = 0;
            var lowestGrade = 100;
            var highestGrade = 0;

            var questions = await _teacherRepository.GetGradedQuestionsAsync();
            var quizzes = await _teacherRepository.GetGradedQuizzesAsync();

            foreach (Question question in questions)
            {
                //Step One
                if (question.StepOneCorrectAnswer != question.StepOneAnswer)
                {
                    timesStepOneMissed++;
                }
                if (question.StepOneAnswer == "a")
                {
                    timesStepOneMissedAnsweredA++;
                }
                if (question.StepOneAnswer == "b")
                {
                    timesStepOneMissedAnsweredB++;
                }
                if (question.StepOneAnswer == "c")
                {
                    timesStepOneMissedAnsweredC++;
                }
                //Step Two
                if (question.StepTwoCorrectAnswer != question.StepTwoAnswer)
                {
                    timesStepTwoMissed++;
                }
                if (question.StepTwoAnswer == "b")
                {
                    timesStepTwoMissedAnsweredB++;
                }
                if (question.StepTwoAnswer == "c")
                {
                    timesStepTwoMissedAnsweredC++;
                }
                if (question.StepTwoAnswer == "d")
                {
                    timesStepTwoMissedAnsweredD++;
                }
                //Step Three
                if (question.StepThreeCorrectAnswer != question.StepThreeAnswer)
                {
                    timesStepThreeMissed++;
                }
                if (question.StepThreeAnswer == "a")
                {
                    timesStepThreeMissedAnsweredA++;
                }
                if (question.StepThreeAnswer == "b")
                {
                    timesStepThreeMissedAnsweredB++;
                }
                if (question.StepThreeAnswer == "d")
                {
                    timesStepThreeMissedAnsweredD++;
                }
            }

            if ((timesStepOneMissed >= timesStepTwoMissed) && (timesStepOneMissed >=timesStepThreeMissed) && (timesStepTwoMissed >= timesStepThreeMissed))
            {
                mostMissedStep = "1";
                secondMostMissedStep = "2";
                thirdMostMissedStep = "3";
            }
            else if ((timesStepTwoMissed >= timesStepOneMissed) && (timesStepTwoMissed >= timesStepThreeMissed) && (timesStepOneMissed >= timesStepThreeMissed))
            {
                mostMissedStep = "2";
                secondMostMissedStep = "1";
                thirdMostMissedStep = "3";
            }
            else if ((timesStepThreeMissed >= timesStepOneMissed) && (timesStepThreeMissed >= timesStepTwoMissed) && (timesStepOneMissed >= timesStepTwoMissed))
            {
                mostMissedStep = "3";
                secondMostMissedStep = "1";
                thirdMostMissedStep = "2";
            }
            else if ((timesStepOneMissed >= timesStepTwoMissed) && (timesStepOneMissed >= timesStepThreeMissed) && (timesStepThreeMissed >= timesStepTwoMissed))
            {
                mostMissedStep = "1";
                secondMostMissedStep = "3";
                thirdMostMissedStep = "2";
            }
            else if ((timesStepTwoMissed >= timesStepThreeMissed) && (timesStepTwoMissed >= timesStepOneMissed) && (timesStepThreeMissed >= timesStepOneMissed))
            {
                mostMissedStep = "2";
                secondMostMissedStep = "3";
                thirdMostMissedStep = "1";
            }
            else
            {
                mostMissedStep = "3";
                secondMostMissedStep = "2";
                thirdMostMissedStep = "1";
            }

            int totalGrade = 0;
            int numberQuizzes = 0;
            foreach (Quiz quiz in quizzes)
            {
                int grade = int.Parse(quiz.Grade);
                totalGrade += grade;
                numberQuizzes++;
                if (grade < lowestGrade)
                {
                    lowestGrade = grade;
                }
                if (grade > highestGrade)
                {
                    highestGrade = grade;
                }
            }

            averageGrade = (totalGrade / numberQuizzes);

            reportInfo.TimesStepOneMissed = timesStepOneMissed.ToString();
            reportInfo.TimesStepOneMissedAnsweredA = timesStepOneMissedAnsweredA.ToString();
            reportInfo.TimesStepOneMissedAnsweredB = timesStepOneMissedAnsweredB.ToString();
            reportInfo.TimesStepOneMissedAnsweredC = timesStepOneMissedAnsweredC.ToString();
            reportInfo.TimesStepTwoMissed = timesStepTwoMissed.ToString();
            reportInfo.TimesStepTwoMissedAnsweredB = timesStepTwoMissedAnsweredB.ToString();
            reportInfo.TimesStepTwoMissedAnsweredC = timesStepTwoMissedAnsweredC.ToString();
            reportInfo.TimesStepTwoMissedAnsweredD = timesStepTwoMissedAnsweredD.ToString();
            reportInfo.TimesStepThreeMissed = timesStepThreeMissed.ToString();
            reportInfo.TimesStepThreeMissedAnsweredA = timesStepThreeMissedAnsweredA.ToString();
            reportInfo.TimesStepThreeMissedAnsweredB = timesStepThreeMissedAnsweredB.ToString();
            reportInfo.TimesStepThreeMissedAnsweredD = timesStepThreeMissedAnsweredD.ToString();
            reportInfo.MostMissedStep = mostMissedStep;
            reportInfo.SecondMostMissedStep = secondMostMissedStep;
            reportInfo.ThirdMostMissedStep = thirdMostMissedStep;
            reportInfo.AverageGrade = averageGrade.ToString();
            reportInfo.LowestGrade = lowestGrade.ToString();
            reportInfo.HighestGrade = highestGrade.ToString();

            return reportInfo;
        } 
    }
}
