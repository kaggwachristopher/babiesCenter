<template>
  <div class="main flex jc-center ai-center">
    <div class="text">
      <h1>WELCOME TO JBC</h1>
      <h3>Another home like home</h3>
      <div class="flex jc-center">
        <h4>continue as..</h4>
      </div>
      <div class="flex jc-around buttons">
        <a href="./sitter" class="button">Sitter</a>
        <a href="./supervisor" class="button">Supervisor</a>
        <a href="./official" class="button">Official</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
}
body {
  position: absolute;
  width: 100%;
  height: 100%;
}
body * {
  color: #fff;
}
.main {
  background: blue;
  height: inherit;
  margin: 0 !important;
}
.text {
  width: 50%;
  text-align: center;
}
h1 {
  font-size: 45px;
}
p {
  font-size: 20px;
}
.buttons {
  margin-top: 15px;
}
@media (max-width: 576px) {
  .buttons {
    flex-direction: column;
  }
  .buttons a {
    margin: 2px 0;
  }
  h1 {
    font-size: 35px;
  }
}
@media (min-width: 700px) {
  .text {
    width: 40%;
  }
}
</style>
