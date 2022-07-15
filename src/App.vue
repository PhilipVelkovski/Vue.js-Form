<template>
 
  <Patientform @CheckForm="checkFormComponent" v-if="this.disableForm" />

 <Summary  v-if="DisplaySummary"/>
</template>

<script>
import Patientform from "./components/Patientform.vue";
import Summary from "./components/Summary.vue";

export default {
  name: "App",
  components: {
    Patientform,
    Summary,
  },
  data(){
    return{
       DisplaySummary:'',
       disableForm:true,
    };
  },
 methods:{
     checkFormComponent(e){
      if(e){
        console.log("this is from the App.vue "+ e); 
      }else {
          this.DisplaySummary = true;
          console.log("this is from the App.vue in Summary"+ this.DisplaySummary);
      }
      if( this.DisplaySummary == true){
        this.disableForm = false;
      }
       
     }
 },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #96d8968f;
  background-image: url("/Icons/doctor.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 300px 300px;
  background-attachment: fixed;
}
</style>
