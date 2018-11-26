import $ from 'jquery'

var studentsArray = new Array();
var gradedQuizArray = new Array();
var apiUrl = 'api/Teacher';

/*
 * On load, fill arrays and display data
 */
$(document).ready(function () {
    // Send an AJAX request
    $.getJSON(apiUrl)
        .done(function (data) {
            // On success, 'data' contains a list of students.
            $.each(data, function (key, user) {
                // Add student names to array.
                addStudent(user, key);
            });
            populateGrades();
        });
}); 

/*
 * Populates student array
 */
function addStudent(user: any, key: string | number | symbol) {
    studentsArray[Number(key)] = user;
}

/*
 * Populates quiz array
 */
function addGradedQuiz(quiz: any, key: string | number | symbol) {
    gradedQuizArray[Number(key)] = quiz;
}

function populateGrades() {
    var apiUrl = 'api/Teacher/getGradedQuizzes';
    $(document).ready(function () {
        // Send an AJAX request
        $.getJSON(apiUrl)
            .done(function (data) {
                // On success, 'data' contains a list of students.
                $.each(data, function (key, quiz) {
                    // Add student names to array.
                    addGradedQuiz(quiz, key);
                });
                fillGradeSummary();
            });
    });
}

/*
 * Matches student ID with grades from the database and returns a string 
 * representing student and their grade.  Incomplete if no grade.
 */
function findStudentGrade(studentID: any) {
    var grade = "";
    var counter = 1;
    var flag = false;
    for (var quiz in gradedQuizArray) {
        if (gradedQuizArray.hasOwnProperty(quiz)) {
            if (studentID == gradedQuizArray[quiz].assignedStudentsId) {
                grade += "| Quiz " + String(counter) + ": " + String(gradedQuizArray[quiz].grade) + "% | ";
                flag = true;
                ++counter;
            }
        }
    }
    if (!flag) {
        grade = "Incomplete";
    }

    return grade;
}

/*
 * Fills the summary of grades with students and their grade(s)
 */
function fillGradeSummary() {
    for (var student in studentsArray) {
        if (studentsArray.hasOwnProperty(student)) {
            var pair = studentsArray[student].firstName + " " + studentsArray[student].lastName + " ----- " + findStudentGrade(studentsArray[student].id);
            var text = document.createElement("text");
            var br1 = document.createElement("br");
            var description = document.createTextNode(pair);
            var listItem = document.createElement("LI");
            var br2 = document.createElement("br");

            listItem.id = "lstItem";
            text.id = "txt";
            text.appendChild(listItem);
            text.appendChild(description);

            (<HTMLInputElement>document.getElementById('list4')).appendChild(listItem);
            (<HTMLInputElement>document.getElementById('list4')).appendChild(text);
            (<HTMLInputElement>document.getElementById('list4')).appendChild(br1);
        }
        else {
            alert("There are no student grades to populate list!");
        }
    }
}