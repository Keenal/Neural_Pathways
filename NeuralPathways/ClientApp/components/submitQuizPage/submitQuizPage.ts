import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../services/student/studentServices';
import { Quiz } from '../../models/Quiz';

@Component
export default class QuizPageComponent extends Vue {

    gradedQuiz = new Quiz();

    goToNextQuestionButtonFunction() {
        StudentService.gradeQuiz().then(result => {
            this.gradedQuiz = result;
        });
        alert("Your score is: " + this.gradedQuiz.grade);
        window.location.href = '/assignedQuizzes';
    }
}