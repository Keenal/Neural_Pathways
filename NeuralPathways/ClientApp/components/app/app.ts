import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        MenuComponent: require('../app/app.vue.html')
    }
})
export default class AppComponent extends Vue {
}
