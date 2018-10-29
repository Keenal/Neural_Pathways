import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { User } from '../../models/User';
import $ from 'jquery'

// Learn jquery and do I have the correct npm installs to work with json/jquery?????


@Component
export default class SignUpComponent extends Vue {
    studentArray = new Array();
    quizArray = ["Quiz 001", "Quiz 002", "Quiz 003", "Quiz 004"];

// Just need to figure out how to fill these arrays from serverside?

    constructor() {
        super();
        this.studentArray = ["Mike Pitts", "Justin Froth", "Phillis Smith", "Hank Dill", "Susy Jam", "Bob Fierce", "Justin Time"];

        //**************************************
        var apiUrl = 'api/Teacher';
        $(document).ready(function () {
            // Send an AJAX request
            $.getJSON(apiUrl)
                .done(function (data) {
                    // On success, 'data' contains a list of students.
                    $.each(data, function (key, item) {
                        // Add student names to array.
                        $('<li>', { text: formatItem(item) }).appendTo($('#students'));
                        // just for test but not working still
                    });
                });
        }); 
        //************************************** Array not being populated.  Dont know if I'm even accessing the array from teacherController
        function formatItem(item: any) {
            return item.FirstName + ': $' + item.LastName;
        }
        // get rid of function when test success

        window.onload = () => {
            this.populateStudents();
            this.populateQuizzes();
        };
    }

    populateStudents() {
        for (var student in this.studentArray) {
            if (this.studentArray.hasOwnProperty(student)) {

                var pair = this.studentArray[student];

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
        }
    }

    populateQuizzes() {
        for (var quiz in this.quizArray) {
            if (this.quizArray.hasOwnProperty(quiz)) {

                var pair = this.quizArray[quiz];

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
}

/*

var apiUrl = 'api/Teacher/GetListOfAllStudents';
$(document).ready(function () {
    // Send an AJAX request
    $.getJSON(apiUrl)
        .done(function (data) {
            // On success, 'data' contains a list of students.
            $.each(data, function (key, item) {
                // Add a list item for the student.
                this.studentArray.push(item.firstName);
            });
        });
});

$.ajax({

    headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

    },

    type: "GET",

    url: 'api/Teacher/GetListOfAllStudents',

    data: JSON.stringify({

        

    }),

    dataType: 'json',
    // GetListOfAllUsers() method call to get array**********************

});


//    console.log(json.items.length);

 //   for (var i = 0; i < json.items.length; i++) {

 //       console.log(json.items[i].name);

  //      var checkbox = document.createElement('input');
  //      checkbox.type = "checkbox";
 //       checkbox.name = "name" + json.items[i].name;
 //       checkbox.value = "value";
//        checkbox.id = "id" + i;
//    }
//};
   
//$(function () {
  //  $('#button').on('click', function () {
    //    var text = $('#text');
    //    text.val(text.val() + ' after clicking');
  //  });
//});

   // (<HTMLInputElement>document.getElementById("button")).addEventListener('click', function() {
  //  var text = document.getElementById('text');
    //text.value += ' after clicking';

 //   });
 */