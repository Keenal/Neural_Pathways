import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../../services/student/studentServices';
import { Question } from '../../../../../models/Question';

@Component
export default class DisplayQuestionStepTwoB extends Vue {

    question: Question = new Question();
    C: string = '5';
    F: string = '4';
    K: string = '10';
    J: string = '-1';
    L: string = '9';
    isLoaded: boolean = true;

    mounted() {
    }

    nextStepButtonFunction() {
        window.location.href = '/displayQuestionStepTwoCExample';
    }
}