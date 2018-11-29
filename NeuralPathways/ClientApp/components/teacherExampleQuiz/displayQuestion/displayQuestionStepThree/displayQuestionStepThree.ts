import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../services/student/studentServices';
import { Question } from '../../../../models/Question';

@Component
export default class DisplayQuestionStepThree extends Vue {

    A: string = '8';
    B: string = '2';
    C: string = '5';
    L: string = '9';
    isLoaded: boolean = true;

    mounted() {
    }

    answerQuestionStepButtonFunction() {
        window.location.href = '/displayQuestionStepThreeAExample';  
    }
}