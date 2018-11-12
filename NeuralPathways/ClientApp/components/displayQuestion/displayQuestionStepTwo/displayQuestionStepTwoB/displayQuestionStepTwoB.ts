import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../services/student/studentServices';
import { Question } from '../../../../models/Question';

@Component
export default class DisplayQuestionStepTwoB extends Vue {

    question: Question = new Question();
    C: string = '';
    F: string = '';
    K: string = '';
    J: string = '';
    L: string = '';
    isLoaded: boolean = false;

    mounted() {
        StudentService.GetRequestedQuestionSelectedQuiz().then(result => {
            this.question = result;
            this.isLoaded = true;
            this.C = this.question.questionVariableC;
            this.F = this.question.questionVariableF;
            this.K = this.question.questionVariableK;
            this.J = this.question.questionVariableJ;
            this.L = this.question.questionVariableL;
        });
    }

    nextStepButtonFunction() {
        window.location.href = '/displayQuestionStepThree';
    }
}