import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../services/student/studentServices';
import { Question } from '../../../models/Question';

@Component
export default class DisplayQuestionStepTwo extends Vue {

    question: Question = new Question();
    A: string = '';
    B: string = '';
    C: string = '';
    F: string = '';
    isLoaded: boolean = false;

    mounted() {
        StudentService.GetRequestedQuestionSelectedQuiz('1').then(result => {
            this.question = result;
            this.isLoaded = true;
            this.A = this.question.questionVariableA;
            this.B = this.question.questionVariableB;
            this.C = this.question.questionVariableC;
            this.F = this.question.questionVariableF;
        });
    }

    answerQuestionStepButtonFunction() {
        if ($('input[id=answerA]:checked').length > 0) {
            window.location.href = '/displayQuestionStepTwoA';
        }
        if ($('input[id=answerB]:checked').length > 0) {
            window.location.href = '/displayQuestionStepTwoB';
        }
        if ($('input[id=answerC]:checked').length > 0) {
            window.location.href = '/displayQuestionStepTwoC';
        }
        if ($('input[id=answerD]:checked').length > 0) {
            window.location.href = '/displayQuestionStepTwoD';
        }
    }
}