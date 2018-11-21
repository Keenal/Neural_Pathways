import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../services/student/studentServices';
import { Question } from '../../../models/Question';

@Component
export default class DisplayQuestionStepOne extends Vue {

    question: Question = new Question();
    A: string = '';
    B: string = '';
    C: string = '';
    isLoaded: boolean = false;

    mounted() {
        StudentService.GetRequestedQuestionSelectedQuiz('1').then(result => {
            this.question = result;
            this.isLoaded = true;
            this.A = this.question.questionVariableA;
            this.B = this.question.questionVariableB;
            this.C = this.question.questionVariableC;
        });
    }

    answerQuestionStepButtonFunction() {
        /*
        if ($('input[id=answerA]:checked').length > 0) {
            this.question.stepOneAnswer = 'a';
            StudentService.answerQuestion(this.question);
            window.location.href = '/displayQuestionStepOneA';
        }
        if ($('input[id=answerB]:checked').length > 0) {
            this.question.stepOneAnswer = 'b';
            StudentService.answerQuestion(this.question);
            window.location.href = '/displayQuestionStepOneB';
        }
        if ($('input[id=answerC]:checked').length > 0) {
            this.question.stepOneAnswer = 'c';
            StudentService.answerQuestion(this.question);
            window.location.href = '/displayQuestionStepOneC';
        }
        */
       // if ($('input[id=answerD]:checked').length > 0) {
            this.question.stepOneAnswer = 'd';
            StudentService.answerQuestion(this.question);
            window.location.href = '/reviewDisplayQuestionStepOneD';
       // }
    }
}