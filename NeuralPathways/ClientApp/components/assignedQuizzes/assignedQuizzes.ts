import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Quiz } from '../../models/Quiz';
import $ from 'jquery';

//var quizzes = new Array();
////var quiz = new Quiz();
////var selectedQuiz = new Quiz();
////var isLoaded = false;

////quizzes: Array < Quiz > =[];
////quiz = new Quiz();
////selectedQuiz = new Quiz();
////isLoaded: boolean = false;

///*
// * Upon loading the page connect to studentController
// */
//window.onload = () => {
//    var apiUrl = 'api/Student';
//    $(document).ready(function () {
//        // Send an AJAX request
//        $.getJSON(apiUrl)
//            .done(function (data) {
//                // On success, 'data' contains a list of quizzes.
//                $.each(data, function (key, Quiz) {
//                    // Add student names to array.
//                    addQuiz(Quiz, key);
//                });
//            });
       
//    });
//}

//function addQuiz(Quiz: any, key: string | number | symbol) {
//    quizzes[Number(key)] = Quiz;
//}

//@Component
//export default class AssignedQuizzesComponent extends Vue {

//}

//import Vue from 'vue';
//import { Component } from 'vue-property-decorator';
//import $ from 'jquery';

//@Component
//export default class AssignedQuizzesComponent extends Vue {
//    takeQuizButtonFunction() {
//        if ($('input[id=quiz1]:checked').length > 0) {
//            window.location.href = '/quizPage';
//        }
//        if ($('input[id=quiz2]:checked').length > 0) {
//            window.location.href = '/quizPage';
//        }
//        if ($('input[id=quiz3]:checked').length > 0) {
//            window.location.href = '/quizPage';
//        }
//    }
//}