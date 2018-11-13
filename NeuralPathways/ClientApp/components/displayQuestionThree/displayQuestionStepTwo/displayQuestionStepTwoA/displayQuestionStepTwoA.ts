import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../services/student/studentServices';
import { Question } from '../../../../models/Question';

@Component
export default class DisplayQuestionStepTwoA extends Vue {

    question: Question = new Question();
    L: string = '';
    C: string = '';
    F: string = '';
    isLoaded: boolean = false;

    mounted() {
        StudentService.GetRequestedQuestionSelectedQuiz('3').then(result => {
            this.question = result;
            this.isLoaded = true;
            this.L = this.question.questionVariableL;
            this.C = this.question.questionVariableC;
            this.F = this.question.questionVariableF;
        });
    }

    nextStepButtonFunction() {
        window.location.href = '/displayQuestionThreeStepThree';
    }
}