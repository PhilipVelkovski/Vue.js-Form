<!-- 3 
 
 Dropdownoptions prima objekt ! 
 objektot e doctor ! 
  {
        id: 1,
        text: "Surgen",
        enterd: false,
},
 



 Sekoj doctor e wrappnat okolu span so if/else za dali da ja prikaze klasata selected  ili  unselect vo zavisnost dali enterd e true ili false 
 Vtoriot span go prikazuva doctor.text imeto na strukata

Celiot proces : 
 PatientFrom  --- Parent Comp so child   Dropdown  
     |
     |     
     | praka niza od objekti 
     |
     |
  Dropdown  --- Parent Comp so child Dropdownoptions
     |
     |
     | prima niza od objekti, praka objekt
     |
     |
Dropdownoptions  --- Dropdownoptions 
     |
     |
     | Prima objekt 

? na sekoj klik event na ovaa komponenta sakam da mi se vnese samo imeto od objektot vo niza koja sto mi e vo data vo patientFormata  ? 

- Za da vidime koj e selektiran 
   treba da vratime event nanazad do PatientForm toes click event so parametar
   toj parametar ke ni e samoto ime na kliknatiot doctor




 EMITS 
   
   Dropdownoptions
          |
          | vraka click event "selected" so parametar(doctor.text)
          |
          |
      Dropdown
          |
          | 
          |  go prima click Eventot "selected" go preimenuva vo "selectedDoctor" so parametar doctor.text i pak go emitnuva
          | 
          |
     PatientFrom
          |   go faka eventot "selectedDoctor" so parametar i deklarira metod "EnterdDoctor(doctor.text)" so go vnesuva izraniot doctor
              vo posebna niza EnterdDoctorTypes vo data() na PatientForm i mu menuva na kliknatiot doctor sostojbata na enterd od false vo true
              tuka se slusa taa sostojba i dava soodvetna klasa  



-->
<template>
  <span :class="[doctor.enterd ? 'selected' : 'unselect']">
    <span @click="selected(doctor.text)"> {{ doctor.text }} </span>
  </span>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "Dropdownoptions",
  props: {
    doctor: Object,
  },

  methods: {
    selected(txt) {
      this.$emit('selected-doctor',txt);
    },
  },
};
</script>

<style scoped>
span {
  display: inline-block;
  padding: 2px;
}
.unselect {
  cursor: pointer;
  background-color: gray;
    padding: 8px;
    color: white;
}
.selected {
  background-color: green;
  cursor: pointer;
  color: white;
  padding: 8px;
}
</style>