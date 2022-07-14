<!-- 1 -->
<template>
  <FormTitle
    title="Enter you'r doctor's Information"
    explanation="
    Enter your doctor's Information so that we can contact him 
    "
  />

  <div>
    <Dropdown @selectedDoctor="EnterdDoctor" :doctors="doctorTypes" />
  </div>
  <div class="have-doctor-field">
    <div class="field">
      <Inputfield
        id="doctorEmail"
        type="email"
        :error="error"
        v-model="HaveDoctor.email"
        label="Doctors email"
         @check="checkDoctarEmail"
      />
    </div>
    <div class="field">
      <Inputfield
        id="doctorsName"
        type="text"
        v-model="HaveDoctor.name"
        label="Doctors name"
      />
    </div>
  </div>

  <!--
        ime na doctor
        vid na doctor
        negov email 


        opptional = Phone
        
        orginacija: koja bolnica
        
      -->
</template>
<script>
import FormTitle from "./FormTitle.vue";
import Inputfield from "./Inputfield.vue";
import Dropdown from "./Dropdown.vue";
const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export default {
  components: {
    FormTitle,
    Inputfield,
    Dropdown,
  },
  data() {
    return {
      HaveDoctor: {
        name: "",
        email: "",
      },
      error:'',
      doctorTypes: [],
      EnterdDoctorTypes: [],
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
  methods: {
    // Pomini cela niza od Doctor tipes
    //so map razmeni - updajtni go poleto so dobieno id
    // so ternary proveri t/f
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
      this.EnterdDoctorTypes.push(DoctorName);
      console.log(this.EnterdDoctorTypes);
      console.log(DoctorName);
    },
    checkDoctarEmail(e) {
      if (e == "doctorEmail") {
        if (this.HaveDoctor.email == "") {
          this.error = "please enter your email addres";
        } else {
          console.log("vnese neso vo email");
          this.error = "";
        }
        if (this.HaveDoctor.email != "") {
          if (this.HaveDoctor.email.match(validMail)) {
            this.error = "";
          } else {
            this.error = "Invalid Email adress!";
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.have-doctor-field {
  display: flex;
  justify-content: space-between;
}
</style>