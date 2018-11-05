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

import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class QuizComponent extends Vue { 

    takeQuizButtonFunction() {
        var selects: Array<String>;

        selects = (document.getElementsByName("quiz")).values;


        /*
         * For reference, use:
         * https://www.c-sharpcorner.com/article/bind-click-event-for-radio-buttons-in-angular-2/
         * 
         */
        
            if (selects.checked === 'quiz1') {
                window.location.href = '/quiz1';
            }
            if (selects.checked === 'quiz2') {
                window.location.href = '/quiz2';
            }
            if (selects.checked === 'quiz3') {
                window.location.href = '/quiz3';
            }
        

    }


}
