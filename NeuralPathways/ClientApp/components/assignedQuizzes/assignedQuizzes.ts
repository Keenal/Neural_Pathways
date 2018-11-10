import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Quiz } from '../../models/Quiz';
import StudentService from '../../services/student/studentServices';


@Component
export default class ListOfAssignedQuizzes extends Vue {

    quizzes: Array<Quiz> = [];
    quiz = new Quiz();
    selectedQuiz = new Quiz();
    isLoaded: boolean = false;

    mounted() {
        StudentService.GetStudentsAssignedQuizzes().then(result => {
            this.quizzes = result;
            this.isLoaded = true;
        });
    }
}
