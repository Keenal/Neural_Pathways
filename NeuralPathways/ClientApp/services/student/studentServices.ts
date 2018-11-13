import { Quiz } from '../../models/Quiz';
import axios from 'axios';
import { Question } from '../../models/Question';

export default class StudentService {

    static quizToTake = new Quiz();
    static questions: Array<Question> = [];
    static questionsIsLoaded = false;
    static questionCounter: number = 1;
    static questionNumberString: string = StudentService.questionCounter.toString();

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

    public static incrementQuestionCounter() {
        if (this.questionCounter == 3) {
            this.resetQuestionCounter;
            window.location.href = '/submitQuizPage';
        }
        else
        {
            this.questionCounter++;
            window.location.href = '/displayQuestionStepOne';
        }
    }

    public static resetQuestionCounter() {
        this.questionCounter = 1;
    }

    public static GetRequestedQuestionSelectedQuiz(): Promise<Question> {
        return axios.post('api/Student/getRequestedQuestionSelectedQuiz', {
            number: this.questionNumberString
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
}


