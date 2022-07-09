<template>
 <Header title="Enter Patient's Information"/>
  <form>
    <Field name="name" text="Name" />
    <Field name="text" text="Surname" />
    <Field name="number" text="Age" />
    <Field name="email" text="Email" />
    <Field name="phone" text="Phone" />
  </form>
   
</template>
  


<script>
import Field from "./Field.vue";
import Header from "./Header.vue";

export default {
  name: "Patientform",
  components: {
    Header,
    Field,
  },
};
</script>


<style>
.error {
  font-size: 1.4em;
  color: rgb(250, 14, 14);
  display: inline-block;
  width: 100%;
  font-weight: bold;
}
form {
  max-width: 800px;
  border-radius: 10px;
  margin: 30px auto;
  background: #ffffffbf;
  padding: 39px;

  text-align: center;
}
label {
  font-weight: bold;
  letter-spacing: 1px;
  display: inline-block;
  color: rgb(107, 107, 107);
  font-size: 1.2em;
  text-transform: uppercase;
  margin: 25px 0 15px;
  text-align: center;
}
input {
  display: block;
  padding: 10px 6px;
  margin: auto;
  width: 80%;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
}
</style>