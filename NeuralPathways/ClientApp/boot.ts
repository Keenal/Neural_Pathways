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

    { path: '/displayQuestionStepOne', component: require('./components/displayQuestion/displayQuestionStepOne/displayQuestionStepOne.vue.html') },
    { path: '/displayQuestionStepOneA', component: require('./components/displayQuestion/displayQuestionStepOne/displayQuestionStepOneA/displayQuestionStepOneA.vue.html') },
    { path: '/displayQuestionStepOneB', component: require('./components/displayQuestion/displayQuestionStepOne/displayQuestionStepOneB/displayQuestionStepOneB.vue.html') },
    { path: '/displayQuestionStepOneC', component: require('./components/displayQuestion/displayQuestionStepOne/displayQuestionStepOneC/displayQuestionStepOneC.vue.html') },
    { path: '/displayQuestionStepOneD', component: require('./components/displayQuestion/displayQuestionStepOne/displayQuestionStepOneD/displayQuestionStepOneD.vue.html') },
    { path: '/displayQuestionStepTwo', component: require('./components/displayQuestion/displayQuestionStepTwo/displayQuestionStepTwo.vue.html') },
    { path: '/displayQuestionStepTwoA', component: require('./components/displayQuestion/displayQuestionStepTwo/displayQuestionStepTwoA/displayQuestionStepTwoA.vue.html') },
    { path: '/displayQuestionStepTwoB', component: require('./components/displayQuestion/displayQuestionStepTwo/displayQuestionStepTwoB/displayQuestionStepTwoB.vue.html') },
    { path: '/displayQuestionStepTwoC', component: require('./components/displayQuestion/displayQuestionStepTwo/displayQuestionStepTwoC/displayQuestionStepTwoC.vue.html') },
    { path: '/displayQuestionStepTwoD', component: require('./components/displayQuestion/displayQuestionStepTwo/displayQuestionStepTwoD/displayQuestionStepTwoD.vue.html') },
    { path: '/displayQuestionStepThree', component: require('./components/displayQuestion/displayQuestionStepThree/displayQuestionStepThree.vue.html') },
    { path: '/displayQuestionStepThreeA', component: require('./components/displayQuestion/displayQuestionStepThree/displayQuestionStepThreeA/displayQuestionStepThreeA.vue.html') },
    { path: '/displayQuestionStepThreeB', component: require('./components/displayQuestion/displayQuestionStepThree/displayQuestionStepThreeB/displayQuestionStepThreeB.vue.html') },
    { path: '/displayQuestionStepThreeC', component: require('./components/displayQuestion/displayQuestionStepThree/displayQuestionStepThreeC/displayQuestionStepThreeC.vue.html') },
    { path: '/displayQuestionStepThreeD', component: require('./components/displayQuestion/displayQuestionStepThree/displayQuestionStepThreeD/displayQuestionStepThreeD.vue.html') },
    { path: '/goToQuestionTwo', component: require('./components/goToQuestionTwo/goToQuestionTwo.vue.html') },

    { path: '/displayQuestionTwoStepOne', component: require('./components/displayQuestionTwo/displayQuestionStepOne/displayQuestionStepOne.vue.html') },
    { path: '/displayQuestionTwoStepOneA', component: require('./components/displayQuestionTwo/displayQuestionStepOne/displayQuestionStepOneA/displayQuestionStepOneA.vue.html') },
    { path: '/displayQuestionTwoStepOneB', component: require('./components/displayQuestionTwo/displayQuestionStepOne/displayQuestionStepOneB/displayQuestionStepOneB.vue.html') },
    { path: '/displayQuestionTwoStepOneC', component: require('./components/displayQuestionTwo/displayQuestionStepOne/displayQuestionStepOneC/displayQuestionStepOneC.vue.html') },
    { path: '/displayQuestionTwoStepOneD', component: require('./components/displayQuestionTwo/displayQuestionStepOne/displayQuestionStepOneD/displayQuestionStepOneD.vue.html') },
    { path: '/displayQuestionTwoStepTwo', component: require('./components/displayQuestionTwo/displayQuestionStepTwo/displayQuestionStepTwo.vue.html') },
    { path: '/displayQuestionTwoStepTwoA', component: require('./components/displayQuestionTwo/displayQuestionStepTwo/displayQuestionStepTwoA/displayQuestionStepTwoA.vue.html') },
    { path: '/displayQuestionTwoStepTwoB', component: require('./components/displayQuestionTwo/displayQuestionStepTwo/displayQuestionStepTwoB/displayQuestionStepTwoB.vue.html') },
    { path: '/displayQuestionTwoStepTwoC', component: require('./components/displayQuestionTwo/displayQuestionStepTwo/displayQuestionStepTwoC/displayQuestionStepTwoC.vue.html') },
    { path: '/displayQuestionTwoStepTwoD', component: require('./components/displayQuestionTwo/displayQuestionStepTwo/displayQuestionStepTwoD/displayQuestionStepTwoD.vue.html') },
    { path: '/displayQuestionTwoStepThree', component: require('./components/displayQuestionTwo/displayQuestionStepThree/displayQuestionStepThree.vue.html') },
    { path: '/displayQuestionTwoStepThreeA', component: require('./components/displayQuestionTwo/displayQuestionStepThree/displayQuestionStepThreeA/displayQuestionStepThreeA.vue.html') },
    { path: '/displayQuestionTwoStepThreeB', component: require('./components/displayQuestionTwo/displayQuestionStepThree/displayQuestionStepThreeB/displayQuestionStepThreeB.vue.html') },
    { path: '/displayQuestionTwoStepThreeC', component: require('./components/displayQuestionTwo/displayQuestionStepThree/displayQuestionStepThreeC/displayQuestionStepThreeC.vue.html') },
    { path: '/displayQuestionTwoStepThreeD', component: require('./components/displayQuestionTwo/displayQuestionStepThree/displayQuestionStepThreeD/displayQuestionStepThreeD.vue.html') },
    { path: '/goToQuestionThree', component: require('./components/goToQuestionThree/goToQuestionThree.vue.html') },

    { path: '/displayQuestionThreeStepOne', component: require('./components/displayQuestionThree/displayQuestionStepOne/displayQuestionStepOne.vue.html') },
    { path: '/displayQuestionThreeStepOneA', component: require('./components/displayQuestionThree/displayQuestionStepOne/displayQuestionStepOneA/displayQuestionStepOneA.vue.html') },
    { path: '/displayQuestionThreeStepOneB', component: require('./components/displayQuestionThree/displayQuestionStepOne/displayQuestionStepOneB/displayQuestionStepOneB.vue.html') },
    { path: '/displayQuestionThreeStepOneC', component: require('./components/displayQuestionThree/displayQuestionStepOne/displayQuestionStepOneC/displayQuestionStepOneC.vue.html') },
    { path: '/displayQuestionThreeStepOneD', component: require('./components/displayQuestionThree/displayQuestionStepOne/displayQuestionStepOneD/displayQuestionStepOneD.vue.html') },
    { path: '/displayQuestionThreeStepTwo', component: require('./components/displayQuestionThree/displayQuestionStepTwo/displayQuestionStepTwo.vue.html') },
    { path: '/displayQuestionThreeStepTwoA', component: require('./components/displayQuestionThree/displayQuestionStepTwo/displayQuestionStepTwoA/displayQuestionStepTwoA.vue.html') },
    { path: '/displayQuestionThreeStepTwoB', component: require('./components/displayQuestionThree/displayQuestionStepTwo/displayQuestionStepTwoB/displayQuestionStepTwoB.vue.html') },
    { path: '/displayQuestionThreeStepTwoC', component: require('./components/displayQuestionThree/displayQuestionStepTwo/displayQuestionStepTwoC/displayQuestionStepTwoC.vue.html') },
    { path: '/displayQuestionThreeStepTwoD', component: require('./components/displayQuestionThree/displayQuestionStepTwo/displayQuestionStepTwoD/displayQuestionStepTwoD.vue.html') },
    { path: '/displayQuestionThreeStepThree', component: require('./components/displayQuestionThree/displayQuestionStepThree/displayQuestionStepThree.vue.html') },
    { path: '/displayQuestionThreeStepThreeA', component: require('./components/displayQuestionThree/displayQuestionStepThree/displayQuestionStepThreeA/displayQuestionStepThreeA.vue.html') },
    { path: '/displayQuestionThreeStepThreeB', component: require('./components/displayQuestionThree/displayQuestionStepThree/displayQuestionStepThreeB/displayQuestionStepThreeB.vue.html') },
    { path: '/displayQuestionThreeStepThreeC', component: require('./components/displayQuestionThree/displayQuestionStepThree/displayQuestionStepThreeC/displayQuestionStepThreeC.vue.html') },
    { path: '/displayQuestionThreeStepThreeD', component: require('./components/displayQuestionThree/displayQuestionStepThree/displayQuestionStepThreeD/displayQuestionStepThreeD.vue.html') },
    { path: '/submitQuizPage', component: require('./components/submitQuizPage/submitQuizPage.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});