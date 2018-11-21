import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../services/student/studentServices';
import { Question } from '../../../../models/Question';

@Component
export default class DisplayQuestionStepThreeC extends Vue {

    question: Question = new Question();
    L: string = '';
    isLoaded: boolean = false;

    mounted() {
        StudentService.GetRequestedQuestionSelectedQuiz('2').then(result => {
            this.question = result;
            this.isLoaded = true;
            this.L = this.question.questionVariableL;
        });
    }

    nextStepButtonFunction() {
        window.location.href = '/reviewDisplayQuestionThreeStepOne';
    }
}