
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


        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: 'api/User/login',  
            type: "POST",
            data: JSON.stringify({
                Email: this.user.email,
                Password: this.user.password
            }),
            dataType: 'json',
            success: function (response) {

                alert("Successfully logged in");

              //  if(response){
             //       window.location.href = "/quiz";
              //  }

            },
            error: function (response) {
                alert("Login failed");
            }
            
        });


    }


}
