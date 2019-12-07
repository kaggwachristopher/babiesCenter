<template>
  <div class="md-6">
    <fieldset>
      <legend>{{section.shift}}</legend>
      <div>
        <div class="accounts flex jc-between bg1">
          <span>No. of children</span>
          <span>{{section.childrenSize}}</span>
        </div>
        <div class="accounts flex jc-between bg1">
          <span>No. of sitters</span>
          <span>{{section.sitters}}</span>
        </div>
        <div class="accounts flex jc-between bg1">
          <span>Amount/hr</span>
          <span>UGX.{{section.charge}}</span>
        </div>
        <div class="accounts flex jc-between bg1">
          <span>Hours attended</span>
          <span>{{section.hoursWorked}}</span>
        </div>
        <div class="accounts flex jc-between bg1">
          <span>Total</span>
          <span>UGX.{{section.total}}</span>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script>
export default {
  name: "Receipt",
  props: ["section"],
  data() {
    return {};
  }
};
</script>
