import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../services/student/studentServices';
import { Question } from '../../../../models/Question';

@Component
export default class DisplayQuestionStepOneB extends Vue {

    question: Question = new Question();
    A: string = '';
    B: string = '';
    C: string = '';
    F: string = '';
    G: string = '';
    isLoaded: boolean = false;

    mounted() {
        StudentService.GetRequestedQuestionSelectedQuiz('3').then(result => {
            this.question = result;
            this.isLoaded = true;
            this.A = this.question.questionVariableA;
            this.B = this.question.questionVariableB;
            this.C = this.question.questionVariableC;
            this.F = this.question.questionVariableF;
            this.G = this.question.questionVariableG;
        });
    }

    nextStepButtonFunction() {
        window.location.href = '/displayQuestionThreeStepTwo';
    }
}