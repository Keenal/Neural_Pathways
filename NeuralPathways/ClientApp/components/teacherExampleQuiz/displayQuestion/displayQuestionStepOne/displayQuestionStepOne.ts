import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../services/student/studentServices';
import { Question } from '../../../../models/Question';

@Component
export default class DisplayQuestionStepOne extends Vue {

    isLoaded: boolean = true;

    mounted() {
    }

    answerQuestionStepButtonFunction() {
        window.location.href = '/displayQuestionStepOneAExample';
    }
}