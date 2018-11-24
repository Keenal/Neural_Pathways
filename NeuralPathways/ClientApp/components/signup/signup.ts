import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import $ from 'jquery';
import { User } from '../../models/user';

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
        } if ((<HTMLInputElement>document.getElementById("teacherRole")).checked) {

            this.user.role = (<HTMLInputElement>document.getElementById("teacherRole")).value;
        }

        //check user inputs
        if(this.user.firstName.length != 0)
        {

            if(this.user.lastName.length != 0)
            {
               
                if(this.user.email.length != 0)
                {
                    if(this.user.password.length != 0)
                    {

                        $.ajax({
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            type: "POST",
                            url: 'api/User/create',
                            data: JSON.stringify({
                                firstname: this.user.firstName,
                                lastname: this.user.lastName,
                                email: this.user.email,
                                password: this.user.password,
                                role: this.user.role
                            }),
                            dataType: 'json',
                            success: function (response) {
                                window.location.href = "/";
                
                            },
                            error: function (response) {
                                alert("Login failed :(");
                            }
                
                        });
                
                    }else{
                        alert("Please enter your password");
                    }

                }else{
                    alert("Please enter your email");
                }
            }else{

                alert("Please enter your last name");
            }
        }else{
            alert("Please enter your first name");
        }

    



    }


}