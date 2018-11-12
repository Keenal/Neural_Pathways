import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../services/student/studentServices';
import { Question } from '../../../models/Question';

@Component
export default class DisplayQuestionStepOne extends Vue {

    question: Question = new Question();
    A: string = this.question.questionVariableA;
    isLoaded: boolean = false;

    mounted() {
        StudentService.GetRequestedQuestionSelectedQuiz().then(result => {
            this.question = result;
            this.isLoaded = true;
        });
    }

    answerQuestionStepButtonFunction() {
        if ($('input[id=answerA]:checked').length > 0) {
            window.location.href = '/displayQuestionStepOneA';
        }
        if ($('input[id=answerB]:checked').length > 0) {
            window.location.href = '/displayQuestionStepOneB';
        }
        if ($('input[id=answerC]:checked').length > 0) {
            window.location.href = '/displayQuestionStepOneC';
        }
        if ($('input[id=answerD]:checked').length > 0) {
            window.location.href = '/displayQuestionStepOneD';
        }
    }
}