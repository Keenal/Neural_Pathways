import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class DisplayQuestionStepThreeC extends Vue {
    nextStepButtonFunction() {
        window.location.href = '/quizPage';
    }
}