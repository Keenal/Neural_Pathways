import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import { User } from '../../models/user';

@Component
export default class LoginComponent extends Vue {

    user = new User();

    loginButtonFunction() {

        this.user.email = (<HTMLInputElement>document.getElementById("userEmail")).value;
        this.user.password = (<HTMLInputElement>document.getElementById("userPassword")).value;
       // this.user.role = $(".role:checked").val();



        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: 'api/User/login',
            type: 'POST',
            data: JSON.stringify({
                email: this.user.email,
                password: this.user.password,
               // role: this.user.role

            }),
            dataType: 'json',
            success: function (response) {

                //if (response.role = 'student')
                //{
                //    window.location.href = "/quiz";
                //}

                //if (response.role = 'teacher') {
                //    window.location.href = "/adminmain";
                //}

                window.location.href = "/quiz";
                

            },
            error: function (response) {
                alert("Login failed :(");
            }

        });


    }

  

}