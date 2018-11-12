import { Quiz } from '../../models/Quiz';
import axios from 'axios';
import { Question } from '../../models/Question';

export default class StudentService {

    static quizToTake = new Quiz();
    static questions: Array<Question> = [];
    static questionsIsLoaded = false;
    static question1 = new Question();
    static question2 = new Question();
    static question3 = new Question();

    public static GetStudentsAssignedQuizzes(): Promise<Array<Quiz>> {
        return axios.get('api/Student/getStudentsAssignedQuizzes')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }

    public static GetStudentsSelectedQuiz(quiz: Quiz) {
        StudentService.quizToTake = quiz;
        StudentService.GetQuestions(quiz).then(result => {
            StudentService.questions = result;
            StudentService.questionsIsLoaded = true;
        });
        StudentService.populateQuestions();
        window.location.href = '/displayQuestionStepOne';

        //if (StudentService.questionsIsLoaded) {
        //    StudentService.populateQuestions();
        //    //alert(StudentService.question3.id);
        //    StudentService.questionsIsLoaded = false;
        //    window.location.href = '/displayQuestionStepOne';
        //}
    }

    public static GetQuestions(quiz: Quiz): Promise<Array<Question>> {
        return axios.post('api/Student/getQuestions', {
            questionOneId: quiz.questionOneId,
            questionTwoId: quiz.questionTwoId,
            questionThreeId: quiz.questionThreeId
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }

    public static populateQuestions() {
        StudentService.question1 = StudentService.questions[0];
        StudentService.question2 = StudentService.questions[1];
        StudentService.question3 = StudentService.questions[2];
    }

    public static getQuestionToDisplay() {

    }
}


