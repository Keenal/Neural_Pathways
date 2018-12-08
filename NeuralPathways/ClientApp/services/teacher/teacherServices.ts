import { Quiz } from '../../models/Quiz';
import axios from 'axios';
import { ReportInfo } from '../../models/ReportInfo';

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

    public static GetReportInfo(): Promise<ReportInfo> {
        return axios.get('api/Teacher/getReportInfo')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
}


