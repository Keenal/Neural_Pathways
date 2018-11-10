import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class DisplayQuestionStepThreeA extends Vue {
    nextStepButtonFunction() {
        window.location.href = '/quizPage';
    }
}