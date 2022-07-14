<template>
<Patientform />
<br>
</template>

<script>
import Patientform from './components/Patientform.vue'; 

export default {
  name: 'App',
  components: {
   Patientform,
  }, 

}



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
body{
  background-color:#96d8968f;
   background-image: url("/Icons/doctor.png");
    background-repeat: no-repeat;
    background-position:center;
    background-size: 300px 300px;
     background-attachment: fixed;

}
</style>
