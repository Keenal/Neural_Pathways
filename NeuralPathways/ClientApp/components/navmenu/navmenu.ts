import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as Cookies from 'es-cookie';

@Component
export default class NavMenu extends Vue {
    

    logOut() {
        console.log("LOGGING OUT");
        Cookies.remove('role');
    }
}