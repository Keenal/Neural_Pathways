import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../../services/student/studentServices';
import { Question } from '../../../../../models/Question';

@Component
export default class DisplayQuestionStepThreeC extends Vue {

    question: Question = new Question();
    L: string = '9';
    isLoaded: boolean = true;

    mounted() {
    }

    nextStepButtonFunction() {
        window.location.href = '/displayQuestionStepThreeDExample';
    }
}