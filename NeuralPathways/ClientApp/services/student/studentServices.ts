import { Quiz } from '../../models/Quiz';
import axios from 'axios';
import { Question } from '../../models/Question';

export default class StudentService {

    public static GetStudentsAssignedQuizzes(): Promise<Array<Quiz>> {
        return axios.get('api/Student/getStudentsAssignedQuizzes')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
}
