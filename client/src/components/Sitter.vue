<template>
  <div>
    <NavBar />
    <div class="grid main">
      <div class="row">
        <div class="md-6">
          <h3 class="text-center heading">My Profile</h3>
          <UserBox />
          <h3 class="text-center heading">Recently Assigned</h3>
          <div>
            <UserBox />
          </div>
        </div>
        <div class="md-6">
          <h3 class="text-center heading">My Babies</h3>
          <div>
            <UserBox />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
import UserBox from "./UserBox.vue";

export default {
  name: "Sitter",
  components: {
    NavBar,
    UserBox
  }
};
</script>
<style scoped>
/**
Primary colors
#966758
#a92020
*/
body {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.heading {
  color: #a92020;
}
</style>
