﻿import Vue from 'vue';
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
        StudentService.GetRequestedQuestionSelectedQuiz('2').then(result => {
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
            this.question.stepTwoAnswer = 'a';
            StudentService.answerQuestion(this.question);
            window.location.href = '/displayQuestionTwoStepTwoA';
        }
        if ($('input[id=answerB]:checked').length > 0) {
            this.question.stepTwoAnswer = 'b';
            StudentService.answerQuestion(this.question);
            window.location.href = '/displayQuestionTwoStepTwoB';
        }
        if ($('input[id=answerC]:checked').length > 0) {
            this.question.stepTwoAnswer = 'c';
            StudentService.answerQuestion(this.question);
            window.location.href = '/displayQuestionTwoStepTwoC';
        }
        if ($('input[id=answerD]:checked').length > 0) {
            this.question.stepTwoAnswer = 'd';
            StudentService.answerQuestion(this.question);
            window.location.href = '/displayQuestionTwoStepTwoD';
        }
    }
}