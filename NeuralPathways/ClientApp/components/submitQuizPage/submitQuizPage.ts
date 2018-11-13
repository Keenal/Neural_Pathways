import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../services/student/studentServices';

@Component
export default class QuizPageComponent extends Vue {

    goToNextQuestionButtonFunction() {
        window.location.href = '/assignedQuizzes';
    }
}