<template>
  <button @click="submitForm">{{text}}</button>
</template>

<script>
export default {
   props:{
     text:String,
     default:'',
   },
   methods:{
    submitForm(){
        console.log("i am the button");
    }
   }
}
</script>

<style scoped>
button{
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 19px;
    background-color: rgb(104, 206, 104) ;
}
</style>