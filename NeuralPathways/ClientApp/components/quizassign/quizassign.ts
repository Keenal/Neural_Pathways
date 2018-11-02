import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { User } from '../../models/User';
import $ from 'jquery'

var quizArray = new Array();
var studentArray = new Array();

/*
 * Upon loading the page connect to teacherController
 */
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
    studentArray[Number(key)] = user;
}

/*
 * Dynamically populate checkboxes with students from the database
 */
function populateStudents() {
    for (var student in studentArray) {
        if (studentArray.hasOwnProperty(student)) {
            var pair = studentArray[student].firstName + " " + studentArray[student].lastName;
            var text = document.createElement("text");
            var br = document.createElement("br");
            var description = document.createTextNode(pair);
            var checkbox = document.createElement("input");

            checkbox.type = "checkbox";
            checkbox.className = "students";
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

/*
 * Dynamically populate checkboxes with quizzes from the database
 */
function populateQuizzes() {
    // Must change this when/if new code becomes available to fill the quiz array
    quizArray = ["Quiz 001"];

    for (var quiz in quizArray) {
        if (quizArray.hasOwnProperty(quiz)) {
            var pair = quizArray[quiz];
            var text = document.createElement("text");
            var br = document.createElement("br");
            var description = document.createTextNode(pair);
            var checkbox = document.createElement("input");

            checkbox.type = "checkbox";
            checkbox.className = "quiz";
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

@Component
export default class Assignment extends Vue {

    /*
     * Connect to teacherController and assign user selected checkboxes of students to quizzes 
     */ 
    assignQuiz() {
        var j = 0;
        var AlertLoaded = false;
        var assignedStudents = new Array();
        var elements = <any>document.getElementsByClassName("students");

        for (var i = 0; elements[i]; i++) {
            if (elements[i].checked == true) {
                // Gather checked student names
                assignedStudents[j] = studentArray[i].firstName;
                ++j;

                $.ajax({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    type: "POST",
                    url: 'api/Teacher/assignStudentQuiz',
                    data: JSON.stringify({
                        firstname: studentArray[i].firstName,
                        lastname: studentArray[i].lastName,
                        id: studentArray[i].id,
                        email: studentArray[i].email,
                        password: studentArray[i].password,
                        role: studentArray[i].role
                    }),
                    dataType: 'json',
                    success: function (response) {  
                        // Alert user of success only once
                        if ((!AlertLoaded)) {
                            AlertLoaded = true;
                            alert("Quizzes have been assigned to " + gatherAssignedStudents() + ".");
                        }
                    },
                    error: function (response) {
                        alert("ERROR: quiz assignment failed!");
                    }
                });   

                /*
                 * Format a string of usernames that have been successfully assigned a quiz
                 */ 
                function gatherAssignedStudents() {
                    var formattedPrompt = "";

                    for (var i = 0; i < assignedStudents.length; i++) {
                        if (i == 0)
                            formattedPrompt = assignedStudents[i];
                        else
                            if (assignedStudents.length == i + 1)
                                formattedPrompt += ", and " + assignedStudents[i];
                            else
                                formattedPrompt += ", " + assignedStudents[i];
                    }

                    return formattedPrompt;
                }
            }
        }
    }
}