import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ReportInfo } from '../../models/ReportInfo';
import TeacherService from '../../services/teacher/teacherServices';


@Component
export default class ListOfAssignedQuizzes extends Vue {

    reportInfo = new ReportInfo();
    isLoaded: boolean = false;

    mounted() {
        TeacherService.GetReportInfo().then(result => {
            this.reportInfo = result;
            this.isLoaded = true;
        });
    }
}
