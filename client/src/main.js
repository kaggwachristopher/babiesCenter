import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./assets/css/grid.min.css";
import "./assets/css/baby.css";
import Routes from "./routes/routes.js";
Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: "history"
});
export default router;
new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
