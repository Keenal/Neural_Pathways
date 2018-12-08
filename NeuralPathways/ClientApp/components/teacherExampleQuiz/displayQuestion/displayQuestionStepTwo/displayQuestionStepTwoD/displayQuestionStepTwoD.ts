import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../../services/student/studentServices';
import { Question } from '../../../../../models/Question';

@Component
export default class DisplayQuestionStepTwoD extends Vue {

    question: Question = new Question();
    C: string = '5';
    F: string = '4';
    L: string = '9';
    M: string = '1';
    isLoaded: boolean = true;

    mounted() {
    }

    nextStepButtonFunction() {
        window.location.href = '/displayQuestionStepThreeExample';
    }
}