import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../services/student/studentServices';
import { Question } from '../../../models/Question';

@Component
export default class DisplayQuestionStepThree extends Vue {

    question: Question = new Question();
    A: string = '';
    B: string = '';
    C: string = '';
    L: string = '';
    isLoaded: boolean = false;

    mounted() {
        StudentService.GetRequestedQuestionSelectedQuiz('2').then(result => {
            this.question = result;
            this.isLoaded = true;
            this.A = this.question.questionVariableA;
            this.B = this.question.questionVariableB;
            this.C = this.question.questionVariableC;
            this.L = this.question.questionVariableL;
        });
    }

    answerQuestionStepButtonFunction() {
        if ($('input[id=answerA]:checked').length > 0) {
            window.location.href = '/displayQuestionTwoStepThreeA';
        }
        if ($('input[id=answerB]:checked').length > 0) {
            window.location.href = '/displayQuestionTwoStepThreeB';
        }
        if ($('input[id=answerC]:checked').length > 0) {
            window.location.href = '/displayQuestionTwoStepThreeC';
        }
        if ($('input[id=answerD]:checked').length > 0) {
            window.location.href = '/displayQuestionTwoStepThreeD';
        }
    }
}