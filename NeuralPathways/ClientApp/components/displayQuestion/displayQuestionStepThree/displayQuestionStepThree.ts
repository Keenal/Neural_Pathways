import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class DisplayQuestionStepThree extends Vue {
    answerQuestionStepButtonFunction() {
        if ($('input[id=answerA]:checked').length > 0) {
            window.location.href = '/displayQuestionStepThreeA';
        }
        if ($('input[id=answerB]:checked').length > 0) {
            window.location.href = '/displayQuestionStepThreeB';
        }
        if ($('input[id=answerC]:checked').length > 0) {
            window.location.href = '/displayQuestionStepThreeC';
        }
        if ($('input[id=answerD]:checked').length > 0) {
            window.location.href = '/displayQuestionStepThreeD';
        }
    }
}