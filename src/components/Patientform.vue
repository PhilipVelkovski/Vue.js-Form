<template>
  <FormTitle
    title="Enter Patients Information"
    explanation="
    Please enter your Information so that the Doctor can contact you
    "
  />
  <form>
    <div class="input-fields">
      <Field
        id="name"
       
        type="text"
        v-model="form.name"
        label="name"
        @check="checkField()"
      />
      <Field
        type="text"
        v-model="form.lname"
        label="Surname"
        @check="checkField()"
      />
      <Field
        type="number"
        v-model="form.age"
        label="Age"
        @check="checkField()"
      />
      <Field
        type="email"
        
        v-model="form.email"
        label="Email"
        @check="checkField()"
      />
      <Field
        type="phone"
        v-model="form.phone"
        label="Phone Nubmer"
        @check="checkField()"
      />
<p>Input name: {{ form.name }}</p>
<!-- :error="msg" -->
    <p>Input lname: {{ form.lname }}</p>

    <p>Input email: {{ form.email }}</p>

    <p>Input phone: {{ form.phone }}</p>

    <p>Input Age: {{ form.age }}</p>
      <!-- v-model go vrzuvash inputot na poleto so promenlivata def vo form ojektot -->
    </div>
    <FormTitle
      title="Please check one of the following"
      explanation="
       Please choose if you have a doctor or not"
    />
     <div class="input-fields">
      <Checkbox label="I Have a doctor"  enterId="haveDoc" v-model:checked="haveDoctor" /> 
      
      <Checkbox label="I dont have a doctor"  enterId="nothaveDoc" v-model:checked="nothaveDoctor" /> 

     </div>



     <div v-if="haveDoctor"> 
      <p>This Shows if i have a doctor</p>
     </div>


    <p>this is i have doctor: {{haveDoctor}}</p>
    <p>this is i dont have doctor: {{nothaveDoctor}}</p>
  </form>
</template>
  


<script>
import Field from "./Field.vue";
import FormTitle from "./FormTitle.vue";
import Checkbox from "./Checkbox.vue";
import { ref } from "vue"


export default {
  name: "Patientform",
  components: {
    Field,
    FormTitle,
    Checkbox,
    Checkbox,
    "check-box": Checkbox,
  },
  setup() {
    const haveDoctor = ref();
    const nothaveDoctor = ref();
    return {
      haveDoctor,
      nothaveDoctor,
    };
  },

  props: {},
  data() {
    return {

      form: {
        email: "",
        name: "",
        lname: "",
        phone: "",
        age: "",
        errors: [],
        checkDoctor:{
           checked:true,
        }
      },
      msg: [],
    };
  },

  methods: {
    checkField() {
      // Tuka provaruvas za sekoj input field
    },
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
.input-fields {
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