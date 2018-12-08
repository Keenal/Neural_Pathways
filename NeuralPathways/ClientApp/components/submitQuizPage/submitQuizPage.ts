import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../services/student/studentServices';
import { Quiz } from '../../models/Quiz';

@Component
export default class QuizPageComponent extends Vue {

    gradedQuiz = new Quiz();
    isLoaded: boolean = false;

    goToNextQuestionButtonFunction() {
        StudentService.gradeQuiz().then(result => {
            this.gradedQuiz = result;
            this.isLoaded = true;
        });
        window.location.href = '/assignedQuizzes';
    }
}