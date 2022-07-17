<template>

<!-- Samo button komponenta so cstm click event-->
<button @click="$emit('onclickbtn')">{{text}}</button>
</template>

<script>
export default {
   props:{
     text:String,
     default:'',
   }, 
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