<template>
  <div id="app">
    <!-- <NavBar />
    <Appoitments />
    <UserBox />
    <Profile /> -->
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    // Appoitments,
    // NavBar,
    // UserBox,
    // Profile
  }
};
</script>

<style>
#app {
  height: inherit;
}
</style>
