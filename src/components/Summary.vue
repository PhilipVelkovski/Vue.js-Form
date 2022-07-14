<template>
  <Patientform @handleForm="displayData"/>
</template>

<script>
import Patientform from "./Patientform.vue";

export default {
  components:{
    Patientform,
  },
  data(){
     return{
       summary:'',
     }
  },
  methods: {
  displayData(form){
    this.summary = form;
  }
  },
}
</script>

<style>

</style>