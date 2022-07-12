<template>
  <Header title="Please Enter your doctor's Information" />
  <Field
    id="name"
    type="text"
    v-model="form.name"
    label="name"
    @check="checkField()"
  />
</template>
<script>
import Field from "./Field.vue";
import Header from "./Header.vue";

export default {
  components: {
    Field,
    Header,
  },
  props: {},
};
</script>

<style scoped>
</style>