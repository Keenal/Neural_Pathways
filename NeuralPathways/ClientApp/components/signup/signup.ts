import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import { User } from '../../../Models/User';

@Component
export default class SignUpComponent extends Vue {

    user = new User();

    signUpFunction() {

        this.user.firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
        this.user.lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
        this.user.email = (<HTMLInputElement>document.getElementById("userEmail")).value;
        this.user.password = (<HTMLInputElement>document.getElementById("userPassword")).value;
        

        //check which role the user selected
        if ((<HTMLInputElement>document.getElementById("studentRole")).checked) {

            this.user.role = (<HTMLInputElement>document.getElementById("studentRole")).value;
        } if ((<HTMLInputElement>document.getElementById("administratorRole")).checked) {

            this.user.role = (<HTMLInputElement>document.getElementById("administratorRole")).value;
        }


        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            url: 'api/User/create',
            data: JSON.stringify({
                FirstName: this.user.firstName,
                LastName: this.user.lastName,
                Email: this.user.email,
                Password: this.user.password,
                Role: this.user.role
            }),
            dataType: 'json',
            complete: function (response) {
                window.location.href = "http://localhost:53352/";
            }
        });


    }


}