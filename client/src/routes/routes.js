import Sitter from "../components/Sitter.vue";
import NavBar from "../components/NavBar.vue";
import Official from "../components/Official.vue";
import App from "../App.vue";
import Appoitments from "../components/Appoitments.vue";
import Welcome from "../components/Welcome.vue";
import Supervisor from "../components/Supervisor.vue";

const Routes = [
  { path: "/nav", component: NavBar },
  { path: "/", component: Welcome },
  { path: "/app", component: App },
  { path: "/appoitments", component: Appoitments },
  { path: "/sitter", component: Sitter },
  { path: "/supervisor", component: Supervisor },
  { path: "/official", component: Official }];

export default Routes;
