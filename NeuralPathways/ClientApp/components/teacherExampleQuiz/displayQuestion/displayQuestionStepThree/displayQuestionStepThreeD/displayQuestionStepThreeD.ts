﻿import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import StudentService from '../../../../../services/student/studentServices';
import { Question } from '../../../../../models/Question';

@Component
export default class DisplayQuestionStepThreeD extends Vue {

    L: string = '9';
    isLoaded: boolean = true;

    mounted() {
    }

    nextStepButtonFunction() {
        window.location.href = '/adminmain';
    }
}