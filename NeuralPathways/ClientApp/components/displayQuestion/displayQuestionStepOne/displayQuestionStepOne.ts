import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../services/student/studentServices';
import { Question } from '../../../models/Question';

@Component
export default class DisplayQuestionStepOne extends Vue {

    questions: Array<Question> = [];
    A: string = '7';
    isLoaded: boolean = true;

    mounted() {

        this.questions = StudentService.getQuestionToDisplay();
        alert(this.questions[0].questionVariableA);

        this.isLoaded = true;
    }

    answerQuestionStepButtonFunction() {
        if ($('input[id=answerA]:checked').length > 0) {
            window.location.href = '/displayQuestionStepOneA';
        }
        if ($('input[id=answerB]:checked').length > 0) {
            window.location.href = '/displayQuestionStepOneB';
        }
        if ($('input[id=answerC]:checked').length > 0) {
            window.location.href = '/displayQuestionStepOneC';
        }
        if ($('input[id=answerD]:checked').length > 0) {
            window.location.href = '/displayQuestionStepOneD';
        }
    }
}