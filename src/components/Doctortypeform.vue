<template>
  <Header title="Doctor Type"></Header>
  <form>
   <Doctortype  />
  
  </form>
  
</template>
<script>
import Header from "./Header.vue";
import DoctorType from "./DoctorType.vue";
export default {
   name:"Doctortypeform",
   components:{
    Header,
    DoctorType,
   }

};
</script>
<style scoped>
div{
    display: flex;
    justify-content: space-around;
}
select{
    display: block;
    padding: 10px 6px;
    margin: auto;
    box-sizing: border-box;
    text-align: start;
    font-size: 20px;
}
label{
    font-size: 1.0em;
    color: rgb(62, 59, 59);
}
</style>