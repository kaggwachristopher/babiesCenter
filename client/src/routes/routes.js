import Sitter from "../components/Sitter.vue";
import NavBar from "../components/NavBar.vue";
import Official from "../components/Official.vue";
import App from "../App.vue";
import Appoitments from "../components/Appoitments.vue";
import Welcome from "../components/Welcome.vue";
import Supervisor from "../components/Supervisor.vue";
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";

const Routes = [
  { path: "/nav", component: NavBar },
  { path: "/", component: Welcome },
  { path: "/app", component: App },
  { path: "/appoitments", component: Appoitments },
  { path: "/sitter", component: Sitter },
  { path: "/supervisor", component: Supervisor },
  { path: "/official", component: Official },
  { path: "/signup", component: Signup },
  { path: "/login", component: Login }
];

export default Routes;
