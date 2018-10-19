import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Component from '../node_modules/vue-class-component';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/login/login.vue.html') },
    { path: '/signup', component: require('./components/signup/signup.vue.html') },
    { path: '/quiz', component: require('./components/quiz/quiz.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});