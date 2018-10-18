import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/signup', component: require('./components/signup/signup.vue.html') },
    { path: '/quiz', component: require('./components/quiz/quiz.vue.html') },
    { path: '/adminmain', component: require('./components/adminmain/adminmain.vue.html') },
    { path: '/quizassign', component: require('./components/quizassign/quizassign.vue.html') },
    { path: '/reports', component: require('./components/reports/reports.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
