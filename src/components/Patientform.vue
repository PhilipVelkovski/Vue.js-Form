<template>
  <FormTitle
    title="Enter Patients Information"
    explanation="
    Please enter your Information so that the Doctor can contact you
    "
  />
  <form @submit.prevent="handleForm(this.form)">
    <div class="input-Inputfields">
      <Inputfield
        id="name"
        type="text"
        v-model="form.name"
        label="name"
        @check="checkInputfield"
        :error="form.errors.name"
      />

      <Inputfield
        id="lname"
        type="text"
        v-model="form.lname"
        label="Surname"
        @check="checkInputfield"
        :error="form.errors.lastname"
      />
      <Inputfield
        id="age"
        type="number"
        v-model="form.age"
        label="Age"
        @check="checkInputfield"
        :error="form.errors.age"
      />
      <Inputfield
        id="email"
        :error="form.errors.email"
        type="email"
        v-model="form.email"
        label="Email"
        @check="checkInputfield"
      />
      <Inputfield
        id="phone"
        :error="form.errors.phone"
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

    <div class="input-Inputfields">
      <Checkbox
        label="I Have a doctor"
        enterId="haveDoc"
        @clickbox="clickedbox"
        v-model:checked="haveDoctor"
      />
      <Checkbox
        label="I dont have a doctor"
        enterId="nothaveDoc"
        @clickbox="clickedbox"
        v-model:checked="nothaveDoctor"
      />
    </div>
    <div v-if="haveDoctor" class="input-Inputfields">
      <FormTitle
        title="Enter you'r doctor's Information"
        explanation="
    Enter your doctor's Information so that we can contact him 
    "
      />

      <HaveDoctor />
    </div>

    <div v-if="nothaveDoctor" class="input-Inputfields">
      <Formtitle
        title="Select the type of doctor you are looking for"
        explanation="Enter "
      />
      <Donthavedoctor />
    </div>
    <p>this is i have doctor: {{ haveDoctor }}</p>
    <p>this is i dont have doctor: {{ nothaveDoctor }}</p>

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
            name="checkbox"
            v-model="form.painDuration"
            @checked="painDurationtype"
          />
        </div>
        <div>
          <Inputfield
            id="under 24h"
            type="radio"
            label="under 24h"
            name="checkbox"
            v-model="form.painDuration"
            @checked="painDurationtype"
          />
        </div>
        <div>
          <Inputfield
            id="over a Week"
            type="radio"
            label="over a week"
            name="checkbox"
            v-model="form.painDuration"
            @checked="painDurationtype"
          />
        </div>
        <div>
          <Inputfield
            id="under a Week"
            type="radio"
            label="under a week"
            name="checkbox"
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
            name="checkbox"
            v-model="form.painType"
            @checked="painType"
          />
        </div>
        <div>
          <Inputfield
            id="Broken"
            type="radio"
            label="broken"
            name="checkbox"
            v-model="form.painType"
            @checked="painType"
          />
        </div>
        <div>
          <Inputfield
            id="bruised"
            type="radio"
            label="bruised"
            name="radio"
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
            name="radio"
            v-model="form.painLocation"
            @checked="painLocation"
          />
        </div>
        <div>
          <Inputfield
            id="torso"
            type="radio"
            label="torso"
            name="radio"
            v-model="form.painLocation"
            @checked="painLocation"
          />
        </div>
        <div>
          <Inputfield
            id="lowerback"
            type="radio"
            label="lowerback"
            name="radio"
            v-model="form.painLocation"
            @checked="painLocation"
          />
        </div>
        <div>
          <Inputfield
            id="arms"
            type="radio"
            label="arms"
            name="radio"
            v-model="form.painLocation"
            @checked="painLocation"
          />
        </div>
        <div>
          <Inputfield
            id="legs"
            type="radio"
            label="legs"
            name="radio"
            v-model="form.painLocation"
            @checked="painLocation"
          />
        </div>
      </div>

      <p>{{ form.painStart }}</p>
      <p>this is checked for duration: {{ form.painDuration }}</p>

      <p>this is checked for pain type: {{ form.painType }}</p>

      <p>this is checked for pain location: {{ form.painLocation }}</p>
      <div class="buttondiv" style="text-align: end;">
        <Button text="Submit" />
      </div>
    </div>
  </form>
</template>
  


<script>
import Inputfield from "./Inputfield.vue";
import Radiobutton from "./Radiobutton.vue";
import Donthavedoctor from "./Donthavedoctor.vue";
import Checkbox from "./Checkbox.vue";
import HaveDoctor from "./HaveDoctor.vue";
import Button from "./Button.vue";
import{ EventBus } from '@/EventBus';
//API
import { ref } from "vue";

const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneValidaton = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

export default {
  name: "Patientform",
  components: {
  
    Button,
    Donthavedoctor,
    Radiobutton,
    Checkbox,
    Inputfield,
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
  data() {
    return {
      form: {
        email: "",
        name: "",
        lname: "",
        phone: "",
        age: "",
        errors: {
          name: "",
          lastname: "",
          email: "",
          phone: "",
          age: "",
        },
        doctorTypes: [],
        painDuration: "",
        painType: "",
        painLocation: "",
      },
      field: {
        haveDoc: "",
        dontHaveDoc: "",
      },
    };
  },
  // Life cicle methods se prepraka na Dropdown komponentata
  // Ne se prikazuva nikade
  methods: {
    handleForm(route){
      console.log(route);
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
    checkInputfield(e) {
      if (e == "name") {
        if (this.form.name == "") {
          this.form.errors.name = "please enter your name";
        } else {
          console.log("vnese neso vo name");
          this.form.errors.name = "";
        }
      }
      if (e == "lname") {
        if (this.form.lname == "") {
          this.form.errors.lastname = "please enter your last name";
        } else {
          console.log("vnese neso vo lname");
          this.form.errors.lastname = "";
        }
      }
      if (e == "age") {
        if (this.form.age == "") {
          this.form.errors.age = "please enter your name";
        } else {
          console.log("vnese neso vo godini");
          this.form.errors.age = "";
        }
      }
      if (e == "email") {
        if (this.form.email == "") {
          this.form.errors.email = "please enter your email addres";
        } else {
          console.log("vnese neso vo email");
          this.form.errors.email = "";
        }
        if (this.form.email != "") {
          if (this.form.email.match(validMail)) {
            this.form.errors.email = "";
          } else {
            this.form.errors.email = "Invalid Email adress!";
          }
        }
      }
      if (e == "phone") {
        if (this.form.phone == "") {
          this.form.errors.phone = "please enter your phone number";
        } else {
          console.log("vnese neso vo phone number");
          this.form.errors.phone = "";
        }
        if (this.form.phone != "") {
          if (this.form.phone.match(phoneValidaton)) {
            this.form.errors.phone = "";
          } else {
            this.form.errors.phone = "Invalid phone format! ";
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

      console.log(e);
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
</style>