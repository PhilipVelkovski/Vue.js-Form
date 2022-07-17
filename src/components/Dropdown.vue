<!-- 2. 

Dropdown komponentata prima Niza od parrent komponentata 
nizata e sostavena od objekti ! 

vo for ciklus == > v-for="doctor in doctors"  [ za sekoj doctor vo nizata doctors ]     Doctor e objekt
prikazi komponenta za toj objekt (doctor)  :key="doctor.id" mora da ima key za redosledot odnosno bindnat counter  


Sega sekoj objekt si e svoja komponenta ! 
I se prikazuva kako komponenta !



Objektot se prepraka na child komponentata Dropdownoptions;

 -->
<template>
  
  <div :key="doctor.id" v-for="doctor in doctors">
    <Dropdownoptions @selectedDoctor="$emit('selectedDoctor',doctor.text)" :doctor="doctor" />
  </div>
</template>

<script>
import Dropdownoptions from "./Dropdownoptions.vue";
export default {
  components: { Dropdownoptions },
  name: "Dropdown",
  inheritAttrs: false,
  
  
  props: {
    doctors: Array,
  },
  emits:['selectedDoctor'],
};
</script>

<style scoped>
h1 {
  font-size: 10px;
}
select {
  display: block;
  padding: 10px 6px;
  margin: auto;
  width: 50%;
  background-color: #e0e3e6;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
}
div {
  display: inline-block;
  margin: 4px 7px 4px 7px;
}
</style>