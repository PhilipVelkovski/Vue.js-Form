<template >
  <div>
    <!-- Prikazi go label-ot samo ako e vnesen inace ne go baraj -->
    <label v-if="label"> {{ label }} </label>
    <input
      type="radio"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      @change="$emit('change',this.id)"
    />
    <p v-if="error">{{error}}</p>
      <!--
      @change="$emit('checked',this.id)"      Go vrzuvash :value="modelValue" definiran vo komponentatta
           @input = "$emit" ... so ova prakas do parent kalsata za inputut da moze da se socuva tamu so v-model
           v-bind="attrs" => site atributi muzes da gi menuvas dinamicki poradi toa sto im gi svrzuvash tuka
      -->



  </div>
</template>
<script setup>
const props = defineProps({
   label: {
    type: [String,Boolean],
    default: "",
  },
  id:{
    type:String,
    default:"",
  },
  error:{
    type:[String,Boolean],
    default:'',
  },
  modelValue: {
    type: [String,Boolean],
    default: "",
  },
  
  // Kako da defines emit za sekoj input field value ili id
 
});

function check(e){
   console.log("this is child calling"); 
}

console.log(props);





</script>

<script>
 export default{
  inheritAttrs: false,

  } 
</script>


<style scoped>
 p{
    color: red;
    text-transform: uppercase;
 }
/* Errors:{
        name:["Please enter your name"],
        lname:["Please enter your surname"],
        age:["please ente your age !", "Age must be from 17 - 100"],
        email:["Please enter valid email"],
        phone:["Please enter valid phone number"],
      }, */
</style>
