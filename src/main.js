import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import UserProfile from "./components/UserProfile.vue";
// import DashBoard from "@/components/DashBoard.vue";
// Import BootstrapVue
import { BootstrapVue } from "bootstrap-vue";
// import { createApp } from "vue";

// Import Bootstrap and BootstrapVue CSS files ( ensure to follow the order)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

//vue alerts
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);


// import socketio from 'socket.io-client';
// // import VueSocketIO from 'vue-socket.io';

// export const SocketInstance = socketio('http://localhost:3000');

// Vue.use(VueSocketIO, SocketInstance);




Vue.config.productionTip = false;
// const dashboard = createApp(DashBoard);
// dashboard.component("user-profile", UserProfile);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
