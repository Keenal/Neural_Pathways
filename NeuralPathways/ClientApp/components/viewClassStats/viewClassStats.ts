import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ReportInfo } from '../../models/ReportInfo';
import TeacherService from '../../services/teacher/teacherServices';


@Component
export default class ListOfAssignedQuizzes extends Vue {

    reportInfo = new ReportInfo();
    isLoaded: boolean = false;
    mostIssues: string = '';
    mostIssuesReason: string = '';
    someIssues: string = '';
    someIssuesReason: string = '';
    graspedBest: string = '';

    mounted() {
        TeacherService.GetReportInfo().then(result => {
            this.reportInfo = result;
            this.isLoaded = true;
        });
    }

    getIssue(): string {
        if (this.reportInfo.mostMissedStep == '1') { //correct answer is d
            this.mostIssues = 'Given "8 = 2(X-5)", which was the very first step, students seem to not fully be grasping how to get rid of a constant like "2" using division. ';
            if ((Number(this.reportInfo.timesStepOneMissedAnsweredA) >= Number(this.reportInfo.timesStepOneMissedAnsweredB)) && (Number(this.reportInfo.timesStepOneMissedAnsweredA) >= Number(this.reportInfo.timesStepOneMissedAnsweredC))) {
                this.mostIssuesReason = 'Students instead thought that dividing both sides by "8" was the best option leaving a "1" on the left side of the equation instead of trying to isolate "X". ';
            }
            else if ((Number(this.reportInfo.timesStepOneMissedAnsweredB) >= Number(this.reportInfo.timesStepOneMissedAnsweredA)) && (Number(this.reportInfo.timesStepOneMissedAnsweredB) >= Number(this.reportInfo.timesStepOneMissedAnsweredC))) {
                this.mostIssuesReason = 'Students instead thought that adding "5" to both sides was the best option not realizing that "5" that "X-5" can not be isolated without first getting rid of the "2" by division. ';
            }
            else {
                this.mostIssuesReason = 'Students confused division with multiplcation on this quiz, they felt multiplying "2" instead of dividing by "2" was the best way to isolate "X" in the long run. ';
            }
        }
        if (this.reportInfo.mostMissedStep == '2') { //correct answer is a
            this.mostIssues = 'Given "4 = X-5", which was the second step in solving this problem, students seem to not fully be grasping how to get rid of a "- 5" to leave "X" all alone on one side of the equation. ';
            if ((Number(this.reportInfo.timesStepTwoMissedAnsweredB) >= Number(this.reportInfo.timesStepTwoMissedAnsweredC)) && (Number(this.reportInfo.timesStepTwoMissedAnsweredB) >= Number(this.reportInfo.timesStepTwoMissedAnsweredD))) {
                this.mostIssuesReason = 'Students instead thought that subtracting "5" from both sides was the best option, not understanding that to undo subtraction you need to use addition. ';
            }
            else if ((Number(this.reportInfo.timesStepTwoMissedAnsweredC) >= Number(this.reportInfo.timesStepTwoMissedAnsweredB)) && (Number(this.reportInfo.timesStepTwoMissedAnsweredC) >= Number(this.reportInfo.timesStepTwoMissedAnsweredD))) {
                this.mostIssuesReason = 'Students instead thought that subtracting "X" from both sides was the best option, not understanding that moving "X" to the other side of the equation at this point, while might not be wrong, does not get you any closer to solving the equation. ';
            }
            else {
                this.mostIssuesReason = 'Students instead thought that dividing both sides by "4" was the best option leaving a "1" on the left side of the equation instead of trying to isolate "X". ';
            }    
        }
        else { //correct answer is c
            this.mostIssues = 'Given "9 = X", which was the final step in solving this problem, students seem to not to understand when the problem is solved succesfully. ';
            if ((Number(this.reportInfo.timesStepThreeMissedAnsweredA) >= Number(this.reportInfo.timesStepThreeMissedAnsweredB)) && (Number(this.reportInfo.timesStepThreeMissedAnsweredA) >= Number(this.reportInfo.timesStepThreeMissedAnsweredD))) {
                this.mostIssuesReason = 'Students instead thought that there is no solution. When provided with the correct answer, students should be able to at least insert the solution back into the original problem and determine if it is correct. ';
            }
            else if ((Number(this.reportInfo.timesStepThreeMissedAnsweredB) >= Number(this.reportInfo.timesStepThreeMissedAnsweredA)) && (Number(this.reportInfo.timesStepThreeMissedAnsweredB) >= Number(this.reportInfo.timesStepThreeMissedAnsweredD))) {
                this.mostIssuesReason = 'Students instead thought that subtracting "X" from both sides was the best option, not understanding that moving "X" to the other side of the equation at this point, while might not be fully wrong, does not get you any closer to solving the equation. ';
            }
            else {
                this.mostIssuesReason = 'Students instead thought that subtracting "9" from both sides was the best option, not understanding that moving "9" to the other side of the equation at this point, while might not be fully wrong, does not get you any closer to solving the equation. ';
            }
        }
        return (this.mostIssues + this.mostIssuesReason);
    }

    getSecondIssue(): string {
        if (this.reportInfo.secondMostMissedStep == '1') { //correct answer is d
            this.someIssues = 'Given "8 = 2(X-5)", which was the very first step, students seem to not fully be grasping how to get rid of a constant like "2" using division. ';
            if ((Number(this.reportInfo.timesStepOneMissedAnsweredA) >= Number(this.reportInfo.timesStepOneMissedAnsweredB)) && (Number(this.reportInfo.timesStepOneMissedAnsweredA) >= Number(this.reportInfo.timesStepOneMissedAnsweredC))) {
                this.someIssuesReason = 'Students instead thought that dividing both sides by "8" was the best option leaving a "1" on the left side of the equation instead of trying to isolate "X". ';
            }
            else if ((Number(this.reportInfo.timesStepOneMissedAnsweredB) >= Number(this.reportInfo.timesStepOneMissedAnsweredA)) && (Number(this.reportInfo.timesStepOneMissedAnsweredB) >= Number(this.reportInfo.timesStepOneMissedAnsweredC))) {
                this.someIssuesReason = 'Students instead thought that adding "5" to both sides was the best option not realizing that "5" that "X-5" can not be isolated without first getting rid of the "2" by division. ';
            }
            else {
                this.someIssuesReason = 'Students confused division with multiplcation on this quiz, they felt multiplying "2" instead of dividing by "2" was the best way to isolate "X" in the long run. ';
            }
        }
        if (this.reportInfo.secondMostMissedStep == '2') { //correct answer is a
            this.someIssues = 'Given "4 = X-5", which was the second step in solving this problem, students seem to not fully be grasping how to get rid of a "- 5" to leave "X" all alone on one side of the equation. ';
            if ((Number(this.reportInfo.timesStepTwoMissedAnsweredB) >= Number(this.reportInfo.timesStepTwoMissedAnsweredC)) && (Number(this.reportInfo.timesStepTwoMissedAnsweredB) >= Number(this.reportInfo.timesStepTwoMissedAnsweredD))) {
                this.someIssuesReason = 'Students instead thought that subtracting "5" from both sides was the best option, not understanding that to undo subtraction you need to use addition. ';
            }
            else if ((Number(this.reportInfo.timesStepTwoMissedAnsweredC) >= Number(this.reportInfo.timesStepTwoMissedAnsweredB)) && (Number(this.reportInfo.timesStepTwoMissedAnsweredC) >= Number(this.reportInfo.timesStepTwoMissedAnsweredD))) {
                this.someIssuesReason = 'Students instead thought that subtracting "X" from both sides was the best option, not understanding that moving "X" to the other side of the equation at this point, while might not be wrong, does not get you any closer to solving the equation. ';
            }
            else {
                this.someIssuesReason = 'Students instead thought that dividing both sides by "4" was the best option leaving a "1" on the left side of the equation instead of trying to isolate "X". ';
            }
        }
        else { //correct answer is c
            this.someIssues = 'Given "9 = X", which was the final step in solving this problem, students seem to not to understand when the problem is solved succesfully. ';
            if ((Number(this.reportInfo.timesStepThreeMissedAnsweredA) >= Number(this.reportInfo.timesStepThreeMissedAnsweredB)) && (Number(this.reportInfo.timesStepThreeMissedAnsweredA) >= Number(this.reportInfo.timesStepThreeMissedAnsweredD))) {
                this.someIssuesReason = 'Students instead thought that there is no solution. When provided with the correct answer, students should be able to at least insert the solution back into the original problem and determine if it is correct. ';
            }
            else if ((Number(this.reportInfo.timesStepThreeMissedAnsweredB) >= Number(this.reportInfo.timesStepThreeMissedAnsweredA)) && (Number(this.reportInfo.timesStepThreeMissedAnsweredB) >= Number(this.reportInfo.timesStepThreeMissedAnsweredD))) {
                this.someIssuesReason = 'Students instead thought that subtracting "X" from both sides was the best option, not understanding that moving "X" to the other side of the equation at this point, while might not be fully wrong, does not get you any closer to solving the equation. ';
            }
            else {
                this.someIssuesReason = 'Students instead thought that subtracting "9" from both sides was the best option, not understanding that moving "9" to the other side of the equation at this point, while might not be fully wrong, does not get you any closer to solving the equation. ';
            }
        }
        return (this.someIssues + this.someIssuesReason);
    }

    getGraspedBest(): string {
        if (this.reportInfo.thirdMostMissedStep == '1') { //correct answer is d
            this.graspedBest = 'Given "8 = 2(X-5)", which was the very first step, students seem to understand how to get rid of a constant like "2" using division and isolate (X-5). ';
        }
        else if (this.reportInfo.thirdMostMissedStep == '2') { //correct answer is a
            this.graspedBest = 'Given "4 = X-5", which was the second step in solving this problem, students seem to grasp how to get rid of a "- 5" to leave "X" all alone on one side of the equation. ';
        }
        else { //correct answer is c
            this.graspedBest = 'Given "9 = X", which was the final step in solving this problem, students seem understand that the problem is solved succesfully. ';
        }
        return (this.graspedBest);
    }
}
