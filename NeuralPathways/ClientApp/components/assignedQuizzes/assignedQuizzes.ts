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

    selectQuizButtonFunction(id: string) {
        this.selectQuizByIdFromListOfQuizzes(id);
        StudentService.studentSelectQuiz(this.selectedQuiz);
        window.location.href = '/displayQuestionStepOne';
    }

    selectQuizByIdFromListOfQuizzes(id: string) {
        for (var index: number = 0; index < this.quizzes.length; index++) {
            if (this.quizzes[index].id == id) {
                this.selectedQuiz = this.quizzes[index];
            }
        }
    }
}
