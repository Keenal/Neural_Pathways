import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import { User } from '../../../Models/User';

@Component
export default class LoginComponent extends Vue {

    user = new User();


    loginButtonFunction() {

        this.user.email = (<HTMLInputElement>document.getElementById("userEmail")).value;
        this.user.password = (<HTMLInputElement>document.getElementById("userPassword")).value;


        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            url: 'api/User/Login',
            data: JSON.stringify({
                Email: this.user.email,
                Password: this.user.password
            }),
            dataType: 'json',
            success: function (response) {

                alert("Successfully logged in");

            },
            error: function (response) {
                alert("Login failed");
            }
        });


    }


}