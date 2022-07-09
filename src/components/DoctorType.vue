<template>
  <label>Choose doctor type: </label>
     <select v-model="doctortype">
        <option :key="doctors.id" v-for="doctors in doctors">
            {{doctors.text}}
        </option>
     </select>
  <!-- <select v-model="doctortype">
      <option value="HaveDoctor">Alredy have a doctor</option>
      <option value="Internist">Internist</option>
      <option value="Psychiatrist">Psychiatrist</option>


      <option value="Gynecologist">Gynecologist</option>
      <option value=" Neurologist">Neurologist</option>
      <option value=" Radiologist">Radiologist</option>
      <option value="Anesthesiologist">Anesthesiologist</option>
      <option value="Pediatrician">Pediatricians</option>
      <option value="Allergists">Allergists</option>
      <option value="Dermatologists">Dermatologists</option>
      <option value="Ophthalmologists">Ophthalmologists</option>
      <option value="Cardiologists">Cardiologists</option>
      <option value="Surgen">Surgen</option>
    </select>  -->
</template>


<script>

export default {
    name:"DoctorType",
    data(){
        return{
          
         doctors: Array,
        }
         
    },
    created() {
        this.doctors = [
            {
                id : 1,
                text : "Alredy have a doctor",
             },
             {
                id : 2,
                text : "Internist",
             },
             {
                id : 3,
                text : "Psychiatrist",
             },
             {
                id : 4,
                text : "Gynecologist",
             },
             {
                id : 5,
                text : "Radiologist",
             },
              {
                id : 6,
                text : "Radiologist",
             },
              {
                id : 7,
                text : "Radiologist",
             },
              {
                id : 8,
                text : "Radiologist",
             },
              {
                id : 9,
                text : "Radiologist",
             },
              {
                id : 10,
                text : "Radiologist",
             },
              {
                id : 11,
                text : "Radiologist",
             },
              {
                id : 12,
                text : "Radiologist",
             },
        ]
    },
    
}
</script>

<style scoped>
</style>