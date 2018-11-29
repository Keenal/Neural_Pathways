import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../../services/student/studentServices';
import { Question } from '../../../../../models/Question';

@Component
export default class DisplayQuestionStepOneC extends Vue {

    question: Question = new Question();
    A: string = '8';
    B: string = '2';
    C: string = '5';
    F: string = '4';
    H: string = '16';
    I: string = '4';
    isLoaded: boolean = true;

    mounted() {
    }

    nextStepButtonFunction() {
        window.location.href = '/displayQuestionStepOneDExample';
    }
}