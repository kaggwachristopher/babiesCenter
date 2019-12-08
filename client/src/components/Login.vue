<template>
  <div class>
    <div class="container-login100">
      <div class="wrap-login100 p-t-50 p-b-90">
        <form class="login100-form validate-form flex-sb flex-w" v-on:submit="login">
          {{users}}
          <span class="login100-form-title p-b-51">Login</span>

          <div class="wrap-input100 validate-input m-b-16" data-validate="Username is required">
            <input
              class="input100"
              type="text"
              name="username"
              v-model="username"
              placeholder="Username"
            />
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-16" data-validate="Password is required">
            <input
              class="input100"
              type="password"
              name="password"
              v-model="password"
              placeholder="Password"
            />
            <span class="focus-input100"></span>
          </div>

          <div class="container-login100-form-btn m-t-17">
            <button class="login100-form-btn" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import authHandler from "../authHandler.js";
import axios from "axios";
import router from "../main.js";
export default {
  name: "Login",
  data() {
    return {
      users: [],
      username: "",
      password: ""
    };
  },
  methods: {
    login: e => {
      e.preventDefault();

      let login = () => {
        let data = {
          username: document.getElementsByTagName("input")[0].value,
          password: document.getElementsByTagName("input")[1].value
        };
        axios
          .post("http://localhost:/api/accounts/login", data)
          .then(response => {
            if (response.status === 200) {
              router.push("/sitter");
            }
          })
          .catch(error => {
            alert(error);
            // res.send("Cannot login");
          });
      };
      login();
    }
  },
  async created() {
    try {
      this.users = await authHandler.getUsers();
    } catch (err) {
      this.error = err;
    }
  }
};
</script>
<style lang="stylus" scoped></style>