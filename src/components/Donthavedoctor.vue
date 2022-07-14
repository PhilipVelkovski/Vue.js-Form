<template>
  
<p>Enter Doctor's Profession</p>

<Dropdown @selectedDoctor="EnterdDoctor" :doctors="doctorTypes" />


</template>

<script>

import Dropdown from "./Dropdown.vue";

export default {
  name:'Donthavedoctor',
  components: {
    Dropdown,
  },
  data() {
    return {
      dontHaveDoctor: {
         EnterdDoctorTypes: [],
      },
      error: "",
      doctorTypes: [],
    };
  },
  created() {
    this.doctorTypes = [
      {
        id: 1,
        text: "Surgen",
        enterd: false,
      },
      {
        id: 2,
        text: "Allergists",
        enterd: false,
      },
      {
        id: 3,
        text: "Dermatologists",
        enterd: false,
      },
      {
        id: 4,
        text: "Ophthalmologists",
        enterd: false,
      },
      {
        id: 5,
        text: "Cardiologists",
        enterd: false,
      },
      {
        id: 6,
        text: "Endocrinologists",
        enterd: false,
      },
      {
        id: 7,
        text: "Gastroenterologists",
        enterd: false,
      },
    ];
  },
  methods:{
       EnterdDoctor(DoctorName) {
      this.doctorTypes = this.doctorTypes.map((doctor) =>
        doctor.text === DoctorName
          ? { ...doctor, enterd: !doctor.enterd }
          : doctor
      );
      // for(var i = 0; i< EnterdDoctorTypes.length; i++){
      //   if(!(this.EnterdDoctorTypes[i].includes(DoctorName))){

      //   }
      // }
      this.dontHaveDoctor.EnterdDoctorTypes.push(DoctorName);
      console.log(this.dontHaveDoctor.EnterdDoctorTypes);
      console.log(DoctorName);
    },
  }
};
</script>

<style>
</style>