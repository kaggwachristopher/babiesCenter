<template
  ><div>
    <NavBar />
    <div class="grid main">
      <div class="row mainRow">
        <div class="md-7">
          <div class="flex jc-between ai-center">
            <div class="grid">
              <div class="row">
                <div class="sm-12 flex jc-between">
                  <h3>My Club</h3>
                  <h4>Babies and sitters</h4>
                </div>
              </div>
              <ImageContainer />
            </div>
          </div>
        </div>
        <div class="md-5">
          <AppForm />
        </div>
      </div>
    </div></div
></template>
<script>
import NavBar from "./NavBar.vue";
import ImageContainer from "./ImageContainer.vue";
import AppForm from "./AppForm.vue";

export default {
  name: "Supervisor",
  components: {
    NavBar,
    ImageContainer,
    AppForm
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
input,
select {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #95675878;
  margin: 5px 0;
  font-size: 18px !important;
  color: #956758;
  background: white;
  outline-color: #966758;
  padding: 8px 15px !important;
}
.sm-4 img {
  width: 100%;
  object-fit: cover;
  object-position: top;
}

@media (max-width: 991px) {
  .mainRow {
    display: flex;
    flex-direction: column-reverse;
  }
  .sm-4 img {
    max-height: 500px;
  }
}
</style>
