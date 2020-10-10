import Vue from 'vue';
import home from './pages/home';

const app = new Vue({
    render: (h) => h(home),

}).$mount('#app');
