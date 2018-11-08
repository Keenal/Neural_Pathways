import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Component from '../node_modules/vue-class-component';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/login/login.vue.html') },
    { path: '/signup', component: require('./components/signup/signup.vue.html') },
    { path: '/assignedQuizzes', component: require('./components/assignedQuizzes/assignedQuizzes.vue.html') },
    { path: '/adminmain', component: require('./components/adminmain/adminmain.vue.html') },
    { path: '/quizassign', component: require('./components/quizassign/quizassign.vue.html') },
    { path: '/reports', component: require('./components/reports/reports.vue.html') },
    { path: '/logout', component: require('./components/logout/logout.vue.html') },
    { path: '/quizPage', component: require('./components/quizPage/quizPage.vue.html') },
    { path: '/displayQuestionStepOne', component: require('./components/displayQuestion/displayQuestionStepOne/displayQuestionStepOne.vue.html') },
    { path: '/displayQuestionStepTwo', component: require('./components/displayQuestion/displayQuestionStepTwo/displayQuestionStepTwo.vue.html') },
    { path: '/displayQuestionStepThree', component: require('./components/displayQuestion/displayQuestionStepThree/displayQuestionStepThree.vue.html') }


];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});