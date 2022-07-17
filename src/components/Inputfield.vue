<template >
  <div>
    <!-- Prikazi go label-ot samo ako e vnesen inace ne go baraj -->
    <label v-if="label"> {{ label }} </label>
    <input
      type="text"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      @blur="$emit('check',this.id)"
      @change="$emit('checked',this.id)"
    />
    <p v-if="error">{{error}}</p>
      <!--
           Go vrzuvash :value="modelValue" definiran vo komponentatta
           @input = "$emit" ... so ova prakas do parent kalsata za inputut da moze da se socuva tamu so v-model
           v-bind="attrs" => site atributi mozes da gi menuvas dinamicki 
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
    type: [String,Boolean,Array],
    default: "",
  },
  // Kako da defines emit za sekoj input field value ili id
 
});
function check(e){
   console.log("this is child calling"); 
}

console.log("Props vo Input Field: " + props);





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
