import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class AssignedQuizzesComponent extends Vue {
    takeQuizButtonFunction() {
        if ($('input[id=quiz1]:checked').length > 0) {
            window.location.href = '/quizPage';
        }
        if ($('input[id=quiz2]:checked').length > 0) {
            window.location.href = '/quizPage';
        }
        if ($('input[id=quiz3]:checked').length > 0) {
            window.location.href = '/quizPage';
        }
    }
}



/*function takeQuizButtonFunction() {

    var selected = (document.getElementsByName("quiz")).values;

    for (var i = 0; i < selected.length; i++) {
        if (selected[i].checked === 'quiz1') {
            window.location.href = '/quiz1';
            }
        if (selected[i].checked === 'quiz2') {
                window.location.href = '/quiz2';
            }
        if (selected[i].checked === 'quiz3') {
                window.location.href = '/quiz3';
            }
        }
    }

*/


        /*

        for (var i = 0; i < this.selects.length; i++) {
            this.selects[i] = (<HTMLDocument>document.getElementsByName("quiz")).values;
            alert(this.selects[i]);
        }


*/

/*

import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class QuizComponent extends Vue {
    selects: any = [];

    takeQuizButtonFunction() {


        this.selects = (document.getElementsByName("quiz"));
*/
        /*
         * For reference, use:
         * https://www.c-sharpcorner.com/article/bind-click-event-for-radio-buttons-in-angular-2/
         * 
         */

/*
        for (var i = 0; i < this.selects.length; i++) {
          // alert(i);
            if (this.selects[i].checked) {
                if (this.selects[i].value == 'quiz1') {
                    alert(this.selects[i].value);
                }
                
             //   window.location.href = "/quiz1";
            }
            if (this.selects[i].checked == "quiz2") {
                window.location.href = "/quiz2";
            }
            if (this.selects[i].checked == "quiz3") {
                window.location.href = "/quiz3";
            }
}

*/

        /*


            if (this.selects.checked === 'quiz1') {
                window.location.href = '/quiz1';
            }
            if (this.selects.checked === 'quiz2') {
                window.location.href = '/quiz2';
            }
            if (this.selects.checked === 'quiz3') {
                window.location.href = '/quiz3';
            }
        
        */

/*
    }


}
*/

