<template>
  <div>
    <div class="back grid">
      <a href="../">
        <i class="fa fa-2x  fa-arrow-alt-circle-left"></i>
      </a>
    </div>
    <div class="grid main flex jc-center ai-center">
      <div class="flex profileBox">
        <div class="details">
          <h4 class="name">
            Tracy Kaggwa
          </h4>
          <strong class="id"> AF33432 </strong><br />
          <strong class="parent"> Parent </strong><br />
          <strong class="name">Yashmin Janet</strong>
        </div>
        <div class="pic">
          <img src="../assets/images/avatar.jpg" alt="Image Cannot be found" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding-top: 20px;
}
.back {
  margin-top: 10px;
}
.details {
  margin: 0px 15px;
  min-width: 230px;
}
.pic {
  margin: 0px 15px;
}
.pic img {
  width: 300px;
  border: solid 1px;
  height: 300px;
  object-fit: cover;
  transition-duration: 0.5s;
}
.pic img:hover {
  transition-duration: 1s;
  /* box-sizing: border-box; */
  border-radius: 20px;
}
.profileBox {
  border: solid 1px;
  padding: 20px;
}
.name {
}
.id {
}
.parent {
  text-decoration: underline;
}
.id,
.name,
.parent {
  margin: 10px 0;
  font-size: 25px;
}
@media (max-width: 690px) {
  .profileBox {
    flex-direction: column-reverse;
  }
}
</style>
