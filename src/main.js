import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

library.add(faInstagram, faFacebookF, faPhone, faAt);
Vue.component('font-awesome-icon', FontAwesomeIcon);
AOS.init();

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
