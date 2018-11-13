import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../services/student/studentServices';
import { Question } from '../../../../models/Question';

@Component
export default class DisplayQuestionStepTwoD extends Vue {

    question: Question = new Question();
    C: string = '';
    F: string = '';
    L: string = '';
    M: string = '';
    isLoaded: boolean = false;

    mounted() {
        StudentService.GetRequestedQuestionSelectedQuiz('1').then(result => {
            this.question = result;
            this.isLoaded = true;
            this.C = this.question.questionVariableC;
            this.F = this.question.questionVariableF;
            this.L = this.question.questionVariableL;
            this.M = this.question.questionVariableM;
        });
    }

    nextStepButtonFunction() {
        window.location.href = '/displayQuestionStepThree';
    }
}