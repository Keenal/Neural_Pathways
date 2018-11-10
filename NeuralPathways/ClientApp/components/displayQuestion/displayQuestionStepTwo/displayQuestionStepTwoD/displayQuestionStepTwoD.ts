import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class DisplayQuestionStepTwoD extends Vue {
    nextStepButtonFunction() {
        window.location.href = '/displayQuestionStepThree';
    }
}