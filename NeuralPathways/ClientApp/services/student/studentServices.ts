import { Quiz } from '../../models/Quiz';
import axios from 'axios';
import { Question } from '../../models/Question';

export default class StudentService {

    static quizToTake = new Quiz();
    static questions: Array<Question> = [];
    static questionsIsLoaded = false;

    public static GetStudentsAssignedQuizzes(): Promise<Array<Quiz>> {
        return axios.get('api/Student/getStudentsAssignedQuizzes')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }

    public static studentSelectQuiz(quiz: Quiz): Promise<Quiz> {
        return axios.post('api/Student/studentSelectQuiz', {
            assignedStudentId: quiz.assignedStudentsId,
            grade: quiz.grade,
            id: quiz.id,
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

    public static GetRequestedQuestionSelectedQuiz(questionNumber: string): Promise<Question> {
        return axios.post('api/Student/getRequestedQuestionSelectedQuiz', {
            number: questionNumber
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
}


