<template>
  <div class>
    <div class="container-login100">
      <div class="wrap-login100 p-t-50 p-b-90">
        <form
          class="login100-form validate-form flex-sb flex-w"
          action="http://localhost/api/accounts/register"
          method="POST"
        >
          <span class="login100-form-title p-b-51">Create JBC Account</span>
          <div class="wrap-input100 validate-input m-b-16" data-validate="Username is required">
            <input class="input100" type="text" name="firstName" placeholder="First Name" />
            <span class="focus-input100"></span>
          </div>
          <div class="wrap-input100 validate-input m-b-16" data-validate="Last Name is required">
            <input class="input100" type="text" name="lastName" placeholder="Last Name" />
            <span class="focus-input100"></span>
          </div>
          <div class="wrap-input100 validate-input m-b-16" data-validate="Username is required">
            <input class="input100" type="email" name="username" placeholder="Email Address" />
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-16" data-validate="Password is required">
            <input class="input100" type="password" name="password" placeholder="Password" />
            <span class="focus-input100"></span>
          </div>
          <div class="wrap-input100 validate-input m-b-16" data-validate="Password is required">
            <input
              class="input100"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <span class="focus-input100"></span>
          </div>
          <div class="wrap-input100 validate-input m-b-16" data-validate="A role is required">
            <input class type="radio" name="role" value="supervisor" id="supervisor" />
            <label for="supervisor">Supervisor</label>
            <input class type="radio" name="role" id="sitter" value="sitter" />
            <label for="sitter">Sitter</label>
            <input class type="radio" name="role" id="customer" value="customer" />
            <label for="customer">Customer</label>
            <span class="focus-input100"></span>
          </div>
          <div class="container-login100-form-btn m-t-17">
            <button class="login100-form-btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Signup",
  methods() {}
  // mounted() {
  //   const jQuery = require("../assets/js/auth/jquery-3.2.1.min.js");
  //   const newJs = require("../assets/js/auth/main.js");

  //   let injectedJs1 = document.createElement("script");
  //   let injectedJs2 = document.createElement("script");

  //   // injectedJs.setAttribute("src", func);
  //   injectedJs1.textContent = jQuery;
  //   injectedJs2.textContent = newJs;

  //   document.head.appendChild(injectedJs1);
  //   document.head.appendChild(injectedJs2);
  //       alert("mounted")

  // }
};
</script>
<style scoped>
@import url("../assets/css/auth/main.css");
@import url("../assets/css/auth/util.css");
</style>