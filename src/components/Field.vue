<template>
  <label :for="name">{{text}}</label>
  <!-- <input input = {{input}}> -->
  <input :type="name" @blur="checkValidation()"/>
  <p>{{ error }}</p>
</template>

<script>
export default {
  name: "Field",
  
  props: {
    name: String,
    error: String,
    text:String,
  },
  methods:{
    checkValidation(){
        console.log("Item Hoverd");
       
    }
  }
  
};
</script>
<style scoped>
</style>