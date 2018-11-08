import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class QuizPageComponent extends Vue {
    takeQuestionButtonFunction() {
        if ($('input[id=question1]:checked').length > 0) {
            window.location.href = '/question';
        }
        if ($('input[id=question2]:checked').length > 0) {
            window.location.href = '/question';
        }
        if ($('input[id=question3]:checked').length > 0) {
            window.location.href = '/question';
        }
    }
}