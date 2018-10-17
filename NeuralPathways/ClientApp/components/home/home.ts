
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as $ from "jquery";

@Component
export default class LoginComponent extends Vue {

    //user = new User();

    userEmail: string = "";
    userPassword: string = "";


    loginButtonFunction() {

        this.userEmail = (<HTMLInputElement>document.getElementById("userEmail")).value;
        this.userPassword = (<HTMLInputElement>document.getElementById("userPassword")).value;


        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            url: 'api/User/login',
            data: JSON.stringify({
                Email: this.userEmail,
                Password: this.userPassword
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
