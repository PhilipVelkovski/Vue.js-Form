<!-- 3 -->
<template>
  <span :class="[doctor.enterd ? 'selected' : 'unselect']">
    <span @click="selected(doctor.text)"> {{ doctor.text }} </span>
  </span>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "Dropdownoptions",
  props: {
    doctor: Object,
  },

  methods: {
    selected(id) {
      this.$emit('selected-doctor',id);
    },
  },
};
</script>

<style scoped>
span {
  display: inline-block;
  padding: 2px;
}
.unselect {
  cursor: pointer;
  background-color: gray;
    padding: 8px;
    color: white;
}
.selected {
  background-color: green;
  cursor: pointer;
  color: white;
  padding: 8px;
}
</style>