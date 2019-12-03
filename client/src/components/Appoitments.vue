<template>
  <div>
    <h1>Appoitments</h1>
    <hr />
    <p V-if="error">{{ error }}</p>
    <div class="appoitments">
      <div
        class="appoitment"
        v-for="appoitment in appoitments"
        v-bind:item="appoitment"
        v-bind:key="appoitment._id"
      >
        <p>{{ appoitment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppoitmentsHandler from "../appoitmentsHandler.js";
export default {
  name: "Appoitments",
  data() {
    return {
      appoitments: [],
      error: "",
      appoitment: ""
    };
  },
  async created() {
    try {
      this.appoitments = await AppoitmentsHandler.getAppoitments();
    } catch (err) {
      this.error = err;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
