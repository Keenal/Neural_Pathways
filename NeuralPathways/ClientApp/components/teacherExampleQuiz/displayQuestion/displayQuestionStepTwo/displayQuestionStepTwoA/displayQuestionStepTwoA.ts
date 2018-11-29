import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../../services/student/studentServices';
import { Question } from '../../../../../models/Question';

@Component
export default class DisplayQuestionStepTwoA extends Vue {

    question: Question = new Question();
    L: string = '9';
    C: string = '5';
    F: string = '4';
    isLoaded: boolean = false;

    mounted() {
    }

    nextStepButtonFunction() {
        window.location.href = '/displayQuestionStepTwoBExample';
    }
}