import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import { User } from '../../models/user';
import * as Cookies from 'es-cookie';

@Component
export default class LoginComponent extends Vue {

    user = new User();

    loginButtonFunction() {

        this.user.email = (<HTMLInputElement>document.getElementById("userEmail")).value;
        this.user.password = (<HTMLInputElement>document.getElementById("userPassword")).value;
    
        if(this.user.email.length != 0 && this.user.password.length != 0)
        {

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
                    console.log(response);
                    Cookies.set('role', response.role);
                    if(response.role === 'teacher') {
                        window.location.href = "/adminmain";
                    } else {
                        window.location.href = "/home";
                    }
    
                },
                error: function (response) {
                    alert("Login failed :(");
                }
    
            });
            
        }else{
            alert("Please check your username or password");
        }

    }

  

}