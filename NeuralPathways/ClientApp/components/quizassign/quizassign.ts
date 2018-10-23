import Vue from 'vue';
import { Component } from 'vue-property-decorator';
//import $ from 'jquery'import { User } from '../../models/user';
//import $ from 'jquery'import { TeacherController } from '../../controllers/TeacherController';

// Learn jquery and do I have the correct npm installs to work with json/jquery?????
window.onload = function() {
    populateStudents();
    populateQuizzes();
}

// Just need to figure out how to fill these arrays from serverside?
var studentArray = ["Mike Pitts", "Justin Froth", "Phillis Smith", "Hank Dill", "Susy Jam", "Bob Fierce", "Justin Time"];
var quizArray = ["Quiz 001", "Quiz 002", "Quiz 003", "Quiz 004"];



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
    }
}

function populateQuizzes() {
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
};

/*$.ajax({

    headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

    },

    type: "POST",

    url: 'api/User/create',

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