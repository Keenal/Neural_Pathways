export default class userInfoModules {

    public firstName: string;
    public lastName: string;
    public userEmail: string;
    public userPassword: string;
    public role: string;


    constructor(firstName: string, lastName: string, userEmail: string, userPassword: string, userRole: string) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.role = userRole;

    }

}