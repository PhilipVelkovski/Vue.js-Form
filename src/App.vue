<template>
 
 <!-- Prikaza so v-if="this.disableForm == true"  -->
<Patientform @CheckForm="checkFormComponent" v-if="this.disableForm" />


 <!-- Prikaza so v-if="DisplaySummary == true" no this.disableForm == false -->
<Summary  @goBack="gobackToForm" v-if="DisplaySummary"/>

<!-- Vo glavnata komponenta App.Vue imame Form komponenta i Summary komonenta. 
Pri run na aplikacijata Prikazana ni e samo PatientForm komponentata. 
Pri popolnuvanjeto na komponentata PatientForm i validacija na polinjata emitnuva promena do Parrent komponentata koja e App.Vue
Taa promena vraka true za Displayform i so custom metodata ja posavuvame disableForm = false i DisplaySummary = true
koja ni ja prikazuva Summary komponentata 
-->



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
       DisplaySummary:false,
       disableForm:true,
    };
  },
 methods:{
     checkFormComponent(e){
      if(!e){
         this.DisplaySummary = true;
        console.log("this is from the App.vue "+ e); 
      }
      if( this.DisplaySummary == true){
        this.disableForm = false;
      }
    },
     gobackToForm(m){
         if(!m){
            this.disableForm = true;
         } 
         if (this.disableForm = true){
          this.DisplaySummary = false;
         }
     },
 
 
 
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
