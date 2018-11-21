﻿import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../services/student/studentServices';
import { Question } from '../../../../models/Question';

@Component
export default class DisplayQuestionStepOneA extends Vue {

    question: Question = new Question();
    A: string = '';
    B: string = '';
    C: string = '';
    D: string = '';
    E: string = '';
    F: string = '';
    isLoaded: boolean = false;

    mounted() {
        StudentService.GetRequestedQuestionSelectedQuiz('1').then(result => {
            this.question = result;
            this.isLoaded = true;
            this.A = this.question.questionVariableA;
            this.B = this.question.questionVariableB;
            this.C = this.question.questionVariableC;
            this.D = this.question.questionVariableD;
            this.E = this.question.questionVariableE;
            this.F = this.question.questionVariableF;
        });
    }

    nextStepButtonFunction() {
        window.location.href = '/displayQuestionStepTwo';
    }
}