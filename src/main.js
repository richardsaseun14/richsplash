import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import "./assets/css/w3.css";
import "./sass/app.scss";

// import "nes.css/css/nes.min.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
