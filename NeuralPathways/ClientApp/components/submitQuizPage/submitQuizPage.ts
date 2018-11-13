import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class QuizPageComponent extends Vue {
    questionOneButtonFunction() {
        window.location.href = '/displayQuestionStepOne';
    }

    questionTwoButtonFunction() {
        window.location.href = '/displayQuestionStepOne';
    }

    questionThreeButtonFunction() {
        window.location.href = '/displayQuestionStepOne';
    }

    takeQuestionButtonFunction() {
        if ($('input[id=question1]:checked').length > 0) {
            window.location.href = '/questionOne';
        }
        if ($('input[id=question2]:checked').length > 0) {
            window.location.href = '/questionTwo';
        }
        if ($('input[id=question3]:checked').length > 0) {
            window.location.href = '/questionThree';
        }
    }
}