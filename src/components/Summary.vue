<!-- Summary komponentata 
gi zima podatocite od local storage i gi prikazuva
"require('@/assets/Doctor-one.jpg')
-->
<template>
  <div class="summary-fields">
    <br />
    <h1>Summary</h1>
    <!--if not have doctor-->
    <div class="doctor-field">
      <div class="doctor-image">
        <img :src="require('@/assets/Doctor-one.jpg')" id="Docimage" />
      </div>
      <div class="doctor-info">
        <span> DoctorName : {{ DoctorName }} </span>
        <span> Doctoremail : {{ Doctoremail }} </span>
        <span> Proffesion: 
          <span v-for="doctor in EnterdDoctorTypes" :key="doctor">
          <span v-for="Doctor in doctor" :key="Doctor">
            {{ Doctor }} <br>
          </span>
          </span> <br /> </span>
      </div>
    </div>
    <!--if dont have doctor -->
    <!-- <div class="doctor-one">
       <div class="doctor-image"></div>
       <div class="doctor-field">
        Proffesion: {{EnterdDoctorTypes}}
      </div>  
    </div> -->

    <div class="patient-information">
      <h2>Patient Information</h2>
     <div class="patient-info">
       <span>Name: {{ name }} {{ lname }} </span> 
      <span>Email address: {{ email }}</span>
      <span>Age: {{ age }}</span>
        <span>Phone numeber: {{ phone }}</span>
        
      </div>
     </div>
    <div class="patient-cause"> 
      <span>Dear {{name}} we will contact Doctor: {{DoctorName}} at {{Doctoremail}} in regards to your {{painType}} {{painLocation}} which has lastet {{painDuration}} and began on {{painStart}},
         please take rest doctor: {{DoctorName}} will be in contact with you shortly.

      </span>
    </div>

    <div>
      <Button text="Back" @onclickbtn="BackButton" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    gobackToForm: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      image: "",
      email: "",
      name: "",
      lname: "",
      phone: "",
      age: "",

      painStart: "",
      DoctorName: "",
      Doctoremail: "",
      EnterdDoctorTypes: [],
      painDuration: "",
      painType: "",
      painLocation: "",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  // Lifecicle hook
  // Gi prevzema i setira podatocite od local storage cim se renderira komponentata
  mounted() {
    // zemi go data objekoto od patien form skladiran vo local storage so key form
    // imame pristap do celiot objekt i samo gi setiream site na data objektot

    var forms = JSON.parse(localStorage.getItem("form"));
    let keys = this.EnterdDoctorTypes.lenght;
    console.log("here is the data" + forms);
    console.log("forms name summary " + forms.email);
    this.name = forms.name;
    this.email = forms.email;
    this.lname = forms.lname;
    this.phone = forms.phone;
    this.age = forms.age;

    this.EnterdDoctorTypes.push(forms.EnterdDoctorTypes);
    this.painStart = forms.painStart;

    this.DoctorName = forms.Doctorname;

    this.Doctoremail = forms.Doctoremail;

    this.painDuration = forms.painDuration;

    this.painType = forms.painType;

    this.painLocation = forms.painLocation;
  },
  methods: {
    BackButton() {
      this.$emit("goBack", this.gobackToForm);
    },
  },
};
</script>

<style scoped>
.summary-fields {
      background-color: rgb(209 226 185 / 63%);
  width: 60%;
  margin: auto;
  border-radius: 14px;
}
.patient-cause{
  
    padding: 13px;
    text-align: center;
    font-size: 16px;


}
.patient-info{
    padding: 15px;
    text-align: start;
    display: grid;
    font-size: 18px;

}
div {
 

    text-align: center;
    border-radius: 12px;
 
}
.doctor-info{
    display: grid;
    font-size: 16px;
    width: 100%;
    margin-top: 11px;
    padding: 4px;
    text-align: start;
}
.doctor-field {
  display: flex;
  justify-content: start;
}
.imagedoc {
  border-radius: 5px;
}
#Docimage {
     width: 100%;
   
    border-radius: 50%;
}
.doctor-image {
  width: 170px;
}
</style>