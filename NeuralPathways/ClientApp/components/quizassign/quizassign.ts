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
    studentArray[Number(key)] = user;
}

function populateStudents() {

    for (var student in studentArray) {
        if (studentArray.hasOwnProperty(student)) {
            var pair = studentArray[student].firstName + " " + studentArray[student].lastName;
            var text = document.createElement("text");
            var br = document.createElement("br");
            var description = document.createTextNode(pair);
            var checkbox = document.createElement("input");

            checkbox.type = "checkbox";
         //   checkbox.name = studentArray[student].id;
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
    assignQuiz() {
        var elements = <any>document.getElementsByClassName("students");
        for (var i = 0; elements[i]; i++) {
            if (elements[i].checked == true) {
            // Working: alert(studentArray[i].firstName);  
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
                        email: studentArray[i].email,
                        password: studentArray[i].password,
                        role: studentArray[i].role
                    }),
                    dataType: 'json',
                    success: function (response) {
                        alert("Quizzes have been assigned!");
                    },
                    error: function (response) {
                        alert("ERROR: Failure!");  // Failing because of database or something I'm doing?
                    }
                });
                
            }
        }
        
     //   if (ids.checked) {

     //   }
        // var ids = document.getElementsByName(studentArray[0].id);
        // var checkedValue = null;
 //       var inputElement = document.getElementById(studentArray[0].id);
 //       for (var i = 0; inputElement[i]; i++) {
           // inputElement = document.getElementsByClassName(studentArray[i].id);
 //           if (inputElement[i].type == 'checkbox' && inputElement[i].checked == true) {
 //               alert("YAYAYAYAYA");
 //           }
  //      }
    }
}
      