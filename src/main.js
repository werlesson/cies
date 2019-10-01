import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Theme from "./plugins/theme";

Vue.use(Theme);
const moment = require("moment");
require("moment/locale/pt-br");

Vue.use(require("vue-moment"), {
  moment
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
