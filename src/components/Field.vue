<template>
  <div>
    <!-- Prikazi go label-ot samo ako e vnesen inace ne go baraj -->
    <label v-if="label"> {{ label }} </label>
    
    <input
   
      type="text"
      :value="modelValue"
      id="value"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      @blur="$emit('check')"
    />
    <p></p>
      <!--
        Go vrzuvash :value="modelValue" definiran vo komponentatta
        @input = "$emit" ... so ova prakas do parent kalsata za inputut da moze da se socuva tamu
        v-bind="attrs" => site atributi muzes da gi menuvas dinamicki poradi toa sto im gi svrzuvash tuka
 
      -->



  </div>
</template>

<script setup>
defineProps({
  label: {
    type: [String,Boolean],
    default: "",
  },
  error:{
    type:String,
    default:'',
  },
  modelValue: {
    type: String,
    default: "",
  },
  method:{
    check(){
      if(this.form.name == "name"){
         error.push["please enter name"];
      }
    }
  }
  
    
});
</script>


<style scoped>
/* Errors:{
        name:["Please enter your name"],
        lname:["Please enter your surname"],
        age:["please ente your age !", "Age must be from 17 - 100"],
        email:["Please enter valid email"],
        phone:["Please enter valid phone number"],
      }, */
</style>
