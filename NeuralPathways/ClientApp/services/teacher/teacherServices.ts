import { Quiz } from '../../models/Quiz';
import axios from 'axios';

export default class TeacherService {

    public static GetGradedQuizzes(): Promise<Array<Quiz>> {
        return axios.get('api/Teacher/getGradedQuizzes')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
}


