import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class DisplayQuestionStepTwoB extends Vue {
    nextStepButtonFunction() {
        window.location.href = '/displayQuestionStepThree';
    }
}