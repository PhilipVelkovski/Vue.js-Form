<template>

  <FormTitle
    title="Enter Patients Information"
    explanation="
    Please enter your Information so that the Doctor can contact you
    "
  />
  <form @submit.prevent="passData">
    <div class="input-Inputfields">
      <Inputfield
        id="name"
        type="text"
        v-model="form.name"
        label="name"
        @check="checkInputfield"
        :error="errors.name"
      />

      <Inputfield
        id="lname"
        type="text"
        v-model="form.lname"
        label="Surname"
        @check="checkInputfield"
        :error="errors.lastname"
      />
      <Inputfield
        id="age"
        type="number"
        v-model="form.age"
        label="Age"
        @check="checkInputfield"
        :error="errors.age"
      />
      <Inputfield
        id="email"
        :error="errors.email"
        type="email"
        v-model="form.email"
        label="Email"
        @check="checkInputfield"
      />
      <Inputfield
        id="phone"
        :error="errors.phone"
        type="phone"
        v-model="form.phone"
        label="Phone Nubmer"
        @check="checkInputfield"
      />
      <p>Input name: {{ form.name }}</p>

      <p>Input lname: {{ form.lname }}</p>

      <p>Input email: {{ form.email }}</p>

      <p>Input phone: {{ form.phone }}</p>

      <p>Input Age: {{ form.age }}</p>
      <!-- v-model go vrzuvash inputot na poleto so promenlivata def vo form ojektot -->
    </div>
    <div>
      <FormTitle
        title="Please check one of the following"
        explanation="
       Please choose if you have a doctor or not"
      />
    </div>
      <!-- Checkbox komponenti -->
    <div class="input-Inputfields">
      <!--Checkbox komponenta za vnesuvaje true deka imash doktor go postavuva haveDoctor = true -->
      <Checkbox
        label="I Have a doctor"
        enterId="haveDoc"
        @clickbox="clickedbox"
        v-model:checked="haveDoctor"
        @doctors="selectedDoctorsArray"
      />
      <!-- Checkbox komponenta za vnesuvaje true deka nemash doktor go postavuva nothaveDoctor = true -->
      <Checkbox
        label="I dont have a doctor"
        enterId="nothaveDoc"
        @clickbox="clickedbox"
        v-model:checked="nothaveDoctor"
      />
    </div>
    <!-- Proveruva dali haveDoctor e posatvena na True za da go prikaze poleto za vesuvanje na tvoj doktor
      Vensuvash Profesija na doktor i negov email i name
     -->
    <div v-if="haveDoctor" class="input-Inputfields">
      <FormTitle
        title="Enter you'r doctor's Information"
        explanation="
         Enter your doctor's Information so that we can contact him "
         />
      <div>
        <p>Enter Doctor's Profession</p>
        <!-- Dropdown komponentata ja prefzema nizata doctorTypes
          I custom event perpaten do PatienForm selectedDoctor so metod EnterdDoctor deklariran vo ovaa Komponenta 
          EnterdDoctor() 
        -->
        <Dropdown @selectedDoctor="EnterdDoctor" :doctors="doctorTypes" />
      </div>
      <div class="have-doctor-field">
        <div class="field">
          <Inputfield
            id="doctorEmail"
            type="email"
            :error="errors.docEmaileror"
            v-model="form.Doctoremail"
            label="Doctors email"
            @check="checkDoctarEmail"
          />
        </div>
        <div class="field">
          <Inputfield
            id="doctorsName"
            type="text"
               @check="checkDoctarName"
            v-model="form.Doctorname"
            label="Doctors name"
            :error="errors.docNameerror"
          />
        </div>
      </div>
    </div>

    <!-- Proveruva dali nothaveDoctor e posatveno na True za da go prikaze poleto za vesuvanje tipot na doktor koj sto go barash -->
    <div v-if="nothaveDoctor" class="input-Inputfields">
      <Formtitle
        title="Select the type of doctor you are looking for"
        explanation="Enter "
      />
      <Dropdown @selectedDoctor="EnterdDoctor" :doctors="doctorTypes" />
    </div>
    
    <p>this is i have doctor: {{ haveDoctor }}</p>
    <p>this is i dont have doctor: {{ nothaveDoctor }}</p>
  
  
    <!-- Radio buttons i data/time input fields od komponentata input field
     -->
    <div class="input-Inputfields">
      <h2>This is Your pain section</h2>
      <div class="calendar">
        <div id="calendar-time">
          <Inputfield
            id="painStart"
            type="date"
            v-model="form.painStart"
            label="When did the pain first show"
            min="2021-01-01"
            max="2022-12-31"
            placeholder="Enter the day the pain started"
          />
        </div>
      </div>

      <div class="pain-duration">
        <div>
          <Inputfield
            id="over 24h"
            type="radio"
            label="over 24h"
            name="painDuration"
            v-model="form.painDuration"
            @checked="painDurationtype"
          />
        </div>
        <div>
          <Inputfield
            id="under 24h"
            type="radio"
            label="under 24h"
            name="painDuration"
            v-model="form.painDuration"
            @checked="painDurationtype"
          />
        </div>
        <div>
          <Inputfield
            id="over a Week"
            type="radio"
            label="over a week"
            name="painDuration"
            v-model="form.painDuration"
            @checked="painDurationtype"
          />
        </div>
        <div>
          <Inputfield
            id="under a Week"
            type="radio"
            label="under a week"
            name="painDuration"
            v-model="form.painDuration"
            @checked="painDurationtype"
          />
        </div>
      </div>
      <h2>Is there any swellnes or burises</h2>
      <div class="pain-duration">
        <div>
          <Inputfield
            id="swollen"
            type="radio"
            label="swellnes"
            name="painType"
            v-model="form.painType"
            @checked="painType"
          />
        </div>
        <div>
          <Inputfield
            id="Broken"
            type="radio"
            label="broken"
            name="painType"
            v-model="form.painType"
            @checked="painType"
          />
        </div>
        <div>
          <Inputfield
            id="bruised"
            type="radio"
            label="bruised"
            name="painType"
            v-model="form.painType"
            @checked="painType"
          />
        </div>
      </div>

      <h2>Where is the pain moslty located</h2>
      <div class="pain-duration">
        <div>
          <Inputfield
            id="head"
            type="radio"
            label="Head"
            name="painLocation"
            v-model="form.painLocation"
            @checked="painLocation"
          />
        </div>
        <div>
          <Inputfield
            id="torso"
            type="radio"
            label="torso"
            name="painLocation"
            v-model="form.painLocation"
            @checked="painLocation"
          />
        </div>
        <div>
          <Inputfield
            id="lowerback"
            type="radio"
            label="lowerback"
            name="painLocation"
            v-model="form.painLocation"
            @checked="painLocation"
          />
        </div>
        <div>
          <Inputfield
            id="arms"
            type="radio"
            label="arms"
            name="painLocation"
            v-model="form.painLocation"
            @checked="painLocation"
          />
        </div>
        <div>
          <Inputfield
            id="legs"
            type="radio"
            label="legs"
            name="painLocation"
            v-model="form.painLocation"
            @checked="painLocation"
          />
        </div>
      </div>

      <p>{{ form.painStart }}</p>

      <p>this is checked for duration: {{ form.painDuration }}</p>
      <p>this is checked for pain type: {{ form.painType }}</p>

      <p>this is checked for pain location: {{ form.painLocation }}</p>
       <!-- Button komponenta so custom event od child:Button.vue do Parrent:PatientForm.vue
         so funkcuja passData -->
      <div class="buttondiv" style="text-align: end">
        <Button text="Submit" @onclickbtn="passData" />
      </div>
    </div>
    
  </form>
</template>
<script>
import Inputfield from "./Inputfield.vue";

import Donthavedoctor from "./Donthavedoctor.vue";
import Checkbox from "./Checkbox.vue";
import HaveDoctor from "./HaveDoctor.vue";
import Button from "./Button.vue";
import Dropdown from "./Dropdown.vue";

//API
import { ref } from "vue";
// Regex vo za email  validMail
const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Regex vo za telefon phoneValidaton
const phoneValidaton =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

export default {
  name: "Patientform",
  components: {
    Button,
    Donthavedoctor,
    Checkbox,
    Inputfield,
    Dropdown,
    HaveDoctor,
    "check-box": Checkbox,
    HaveDoctor,
  },

  //Compositon API za checkbox komponentata e koristeno
  setup() {
    const haveDoctor = ref();
    const nothaveDoctor = ref();

    return {
      haveDoctor,
      nothaveDoctor,
    };
  },
  // Created 
  /*Ova se elementi na nizata deklarirana vo data 
  */
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
  // Properti za Patient form sto da prifaka od parrent komponentata
  props: {
    DisplaySummary: {
      type: Boolean,
      default: false,
    },
  },
  // Site podatoci za patient se vo form objektot  
  data() {
    return {
      form: {
        haveDoctor:'',
        nothaveDoctor:'',
        email: "",
        name: "",
        lname: "",
        phone: "",
        age: "",
        painStart: "",
        Doctorname: "",
        Doctoremail: "",
      // Nizata od Doktori selektirani
        EnterdDoctorTypes: [],
        painDuration: "",
        painType: "",
        painLocation: "",
      },
      // Nizata od Doktori ponudeni
      doctorTypes: [],
      
      errors: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
        age: "",
        docEmaileror: "",
        docNameerror: "",
      },
      // field: {
      //   haveDoc: "",
      //   dontHaveDoc: "",
      // },
    };
  },
  // Prepraka custom event CheckForm do parrent App.vue
  emits: ["CheckForm"],

  // Life cicle methods se prepraka na Dropdown komponentata
  // Ne se prikazuva nikade
  methods: {
    selectedDoctorsArray(t) {
      this.doctorTypes.push(t);
    },
    
    // Button click
   
    passData() {
    // So passData function go prefrlame celiot (data) object vo local storage 
      // So key: "form" i to string - Objektot data so podatocite za pacienteot;
   
     window.localStorage.setItem("form", JSON.stringify(this.$data.form));  

      // Ova ni e celiot data objekt od formata 
      console.log(this.$data.form);


     // Predhodno imavme definirano props DisplaySummary boolean 
     // koj ni e false po default i dodavame na komponenta PatietnForm event CheckForm 
      this.$emit("CheckForm", this.DisplaySummary);

    },

    painDurationtype(e) {
      this.form.painDuration = e;
    },
    painType(event) {
      this.form.painType = event;
    },
    painLocation(e) {
      this.form.painLocation = e;
    },
  


  // Ova e funkcijata prepratena od dropdownoptions komponentata
    EnterdDoctor(DoctorName) {
      // metodot mapp prima parametar doctor pravi nova
      // proveruva dali Doctor.text e ednakov datatype so emitnuvaniot DoctorName ako da 
      // ja postava klasata od false na true 
      this.doctorTypes = this.doctorTypes.map((doctor) =>
        doctor.text === DoctorName ? { ...doctor, enterd: !doctor.enterd } : doctor );
     
     // Go vnesuva selektiraniot doctor negoviot text vo nizata EnterdDoctorTypes 
     this.form.EnterdDoctorTypes.push(DoctorName);

      console.log(this.form.EnterdDoctorTypes);

      console.log(DoctorName);
    },

    // Funkcija na checkDoctorEmali na 
    // Enter doctor email 
    // Proveruva prvo dali e prazen fielod na blur
    // Ako e se prikazuva please enter your email addres
    // isto i proveruva dali e validen mail
    checkDoctarEmail(e) {
      if (e == "doctorEmail") {
        if (this.form.Doctoremail == "") {
          this.errors.docEmaileror = "please enter your email addres";
        } else {
          console.log("vnese neso vo doctor email");
          this.errors.docEmaileror = "";
        }
        if (this.form.Doctoremail != "") {
          if (this.form.Doctoremail.match(validMail)) {
            this.errors.docEmaileror = "";
          } else {
            this.errors.docEmaileror = "Invalid Email adress!";
          }
        }
      }
    },
    checkDoctarName(e){
        if(e == "doctorsName"){
          if(this.form.Doctorname != ""){
            this.errors.docNameerror = "";
          } else{
            this.errors.docNameerror = "Veneseto go imeto na vashiot doctor";
          }
        }
    },
    // Funkcija checkInput fiend koja proveruva dali ima neshto vneseno vo Input field component
    // Proveruva za sekoj input so soodvetno id za da ne vadi error na site fields ako edent e netocen
    // I regex dali e valid inputot za broj i email
    checkInputfield(e) {
      if (e == "name") {
        if (this.form.name == "") {
          this.errors.name = "please enter your name";
        } else {
          console.log("vnese neso vo name");
          this.errors.name = "";
        }
      }
      if (e == "lname") {
        if (this.form.lname == "") {
          this.errors.lastname = "please enter your last name";
        } else {
          console.log("vnese neso vo lname");
          this.errors.lastname = "";
        }
      }
      if (e == "age") {
        if (this.form.age == "") {
          this.errors.age = "please enter your name";
        } else {
          console.log("vnese neso vo godini");
          this.errors.age = "";
        }
      }
      if (e == "email") {
        if (this.form.email == "") {
          this.errors.email = "please enter your email addres";
        } else {
          console.log("vnese neso vo email");
          this.errors.email = "";
          return true;
        } 
        if (this.form.email != "") {
          if (this.form.email.match(validMail)) {
            this.errors.email = "";
          } else {
            this.errors.email = "Invalid Email adress!";
          }
        }
      }
      if (e == "phone") {
        if (this.form.phone == "") {
          this.errors.phone = "please enter your phone number";
        } else {
          console.log("vnese neso vo phone number");
          this.errors.phone = "";
        }
        if (this.form.phone != "") {
          if (this.form.phone.match(phoneValidaton)) {
            this.errors.phone = "";
          } else {
            this.errors.phone = "Invalid phone format! ";
          }
        }
      }
    },
    clickedbox(e) {
      if (this.haveDoctor) {
        console.log("have A doctor " + this.haveDoctor);
        this.nothaveDoctor = false;
      }
      if (this.nothaveDoctor) {
        console.log("dont have doctor " + this.nothaveDoctor);
        this.haveDoctor = false;
      }

    
    },
  },
};
</script>


<style>
h2 {
  color: rgb(59, 54, 54);
}
.calendar {
  align-content: baseline;
  text-align: center;
}
.pain-duration {
  display: flex;
  justify-content: space-between;
}
.input-Inputfields {
  max-width: 800px;
  border-radius: 10px;
  margin: 30px auto;
  background: #ffffffbf;
  padding: 39px;

  text-align: center;
}
label {
  font-weight: bold;
  letter-spacing: 1px;
  display: inline-block;
  color: rgb(107, 107, 107);
  font-size: 1.2em;
  text-transform: uppercase;
  margin: 25px 0 15px;
  text-align: center;
}
input {
  display: block;
  padding: 10px 6px;
  margin: auto;
  width: 80%;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
}
input[type="checkbox"] {
  display: inline-block;
  height: 15px;
  width: 50px;
  align-items: baseline;
}
#lbl {
  display: inline-block;
}
.have-doctor-field {
  display: flex;
  justify-content: space-between;
}
</style>