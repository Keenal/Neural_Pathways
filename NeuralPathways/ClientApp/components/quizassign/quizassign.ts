import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { User } from '../../models/User';
import $ from 'jquery'

var quizArray = new Array();
var studentArray = new Array();

window.onload = () => {
    var apiUrl = 'api/Teacher';
    $(document).ready(function () {
        // Send an AJAX request
        $.getJSON(apiUrl)
            .done(function (data) {
                // On success, 'data' contains a list of students.
                $.each(data, function (key, user) {
                    // Add student names to array.
                    addStudent(user, key);
                });
                populateStudents();
                populateQuizzes();
            });
    });
}

function addStudent(user: any, key: string | number | symbol) {
    studentArray[Number(key)] = user.firstName + " " + user.lastName;
}

function populateStudents() {

    for (var student in studentArray) {
        if (studentArray.hasOwnProperty(student)) {
            var pair = studentArray[student];
            var text = document.createElement("text");
            var br = document.createElement("br");
            var description = document.createTextNode(pair);
            var checkbox = document.createElement("input");

            checkbox.type = "checkbox";
            checkbox.name = "fromServerSide[]";
            checkbox.value = pair;
            checkbox.id = "boxes"
            text.id = "txt";

            text.appendChild(checkbox);
            text.appendChild(description);

            (<HTMLInputElement>document.getElementById('checkboxes1')).appendChild(checkbox);
            (<HTMLInputElement>document.getElementById('checkboxes1')).appendChild(text);
            (<HTMLInputElement>document.getElementById('checkboxes1')).appendChild(br);

        }
        else {
            alert("There are no students to populate checkboxes!");
        }
    }
}

function populateQuizzes() {
    // Must change this when new code becomes available to fill the quiz array
    quizArray = ["Quiz 001", "Quiz 002", "Quiz 003", "Quiz 004"];

    for (var quiz in quizArray) {
        if (quizArray.hasOwnProperty(quiz)) {
            var pair = quizArray[quiz];
            var text = document.createElement("text");
            var br = document.createElement("br");
            var description = document.createTextNode(pair);
            var checkbox = document.createElement("input");

            checkbox.type = "checkbox";
            checkbox.name = "fromServerSide[]";
            checkbox.value = pair;
            checkbox.id = "boxes"
            text.id = "txt";

            text.appendChild(checkbox);
            text.appendChild(description);

            (<HTMLInputElement>document.getElementById('checkboxes2')).appendChild(checkbox);
            (<HTMLInputElement>document.getElementById('checkboxes2')).appendChild(text);
            (<HTMLInputElement>document.getElementById('checkboxes2')).appendChild(br);
        }
    }
}