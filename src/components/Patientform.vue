<template>
  <FormTitle
    title="Enter Patients Information"
    explanation="
    Please enter your Information so that the Doctor can contact you
    "
  />
  <form>
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
    <FormTitle
      title="Please check one of the following"
      explanation="
       Please choose if you have a doctor or not"
    />
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
      <HaveDoctor />
    </div>

    <div v-if="nothaveDoctor" class="input-Inputfields">
      <!-- Dont have a doctor -->
    </div>
    <p>this is i have doctor: {{ haveDoctor }}</p>
    <p>this is i dont have doctor: {{ nothaveDoctor }}</p>

    <div class="input-Inputfields">
      <h2>This is Your pain section</h2>
      <p>When Pain Start </p>
      <p>Pain Area Duration</p>  
      <p> Swelnws/Bruise</p>
    </div>
  </form>
</template>
  


<script>
import Inputfield from "./Inputfield.vue";
import FormTitle from "./FormTitle.vue";
import Checkbox from "./Checkbox.vue";
//API
import { ref } from "vue";

import HaveDoctor from "./HaveDoctor.vue";

const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneValidaton =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

export default {
  name: "Patientform",
  components: {
    FormTitle,
    Checkbox,
    Inputfield,
    HaveDoctor,
    Checkbox,
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
  props: {},
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
    getData(value) {
      console.log(value);
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
      this.e != this.e;
      console.log(e);
    },
  },
};
</script>


<style>
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