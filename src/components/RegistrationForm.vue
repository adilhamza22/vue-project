<template>
  <div class="reg-form-main">
    <div class="reg-form mw-100">
      <img
        src="../assets/color-logo- no-bg.svg"
        alt="logo"
        width="200px"
        height="100px"
      />

      <div class="header p-2 mw-100 row d-flex align-items-baseline">
        <!-- <h3 class="">Register for Data Portal X</h3> -->
        <!-- <div class="col logo-col">

                    <img src="../assets/color-logo- no-bg.svg" alt="logo" width="120px" height="100px">
                </div> -->
        <div class="col signup-col">
          <h3 class="">Application For Summer Internship</h3>

          <!-- <h3 class="">Application For Summer Internship</h3> -->
        </div>
      </div>
      <div>
        <b-form
          class="form-content row flex-wrap"
          @submit="onSubmit"
          v-if="show"
        >
          <div class="form-col col">
            <b-form-group
              id="input-group-2"
              label="First Name:"
              label-for="first-name"
            >
              <b-form-input
                id="first-name"
                v-model="form.fName"
                placeholder="First Name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Last Name:"
              label-for="last-name"
            >
              <b-form-input
                id="last-name"
                v-model="form.lName"
                placeholder="Last name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="email"
              type="email"
            >
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-1" label="DOB" label-for="dob">
              <b-form-input
                id="dob"
                v-model="form.dob"
                type="date"
                placeholder="DOB"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Gender" v-slot="{ ariaDescribedby }">
              <b-form-radio
                v-model="form.gender"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="Male"
                >Male</b-form-radio
              >
              <b-form-radio
                v-model="form.gender"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="Female"
                >Female</b-form-radio
              >
            </b-form-group>
          </div>

          <div class="form-col col">
            <b-form-group
              id="input-group-2"
              label="Phone"
              label-for="phone"
              type="number"
            >
              <b-form-input
                id="phone"
                v-model="form.phone"
                type="number"
                placeholder="Phone Number"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="CNIC"
              label-for="cnic"
              type="number"
            >
              <b-form-input
                id="cnic"
                type="number"
                v-model="form.cnic"
                placeholder="CNIC"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-1" label="Age" label-for="age">
              <b-form-input
                id="age"
                v-model="form.age"
                type="number"
                placeholder="Enter age"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Address"
              label-for="address"
            >
              <b-form-input
                id="address"
                v-model="form.address"
                type="text"
                placeholder="Enter address"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-file 
              required
              accept="image/jpeg,image/jpg,image/png, application/pdf"
              v-model="form.file1"
              :state="Boolean(form.file1)"
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <b-button type="submit" variant="primary">Submit</b-button>
            <!-- <b-button type="reset" variant="danger" @click="onSignIn"
                    >Login</b-button
                > -->
            <!-- <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div> -->
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
vue.use(VueAxios, axios);
export default {
  data() {
    return {
      form: {
        email: "",
        fName: "",
        lName: "",
        // checked: [],
        gender: "",
        dob: "",
        age: "",
        phone: "",
        address: "",
        cnic: "",
        file1: [],
      },
      //   foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.form));
      const data = new FormData();
      data.append("cv", this.form.file1);
      data.append("Fname", this.form.fName);
      data.append("Lname", this.form.lName);
      data.append("phoneNo", this.form.phone);
      data.append("email", this.form.email);
      data.append("cnic", this.form.cnic);
      data.append("dob", this.form.dob);
      data.append("age", this.form.age);
      data.append("address", this.form.address);
      data.append("coverLetter", "uhuh");
      data.append("education", "jjnj");
      data.append("gender", this.form.gender);
      console.log("test lname", this.form.lName);
      console.log("file1", this.form.file1);
      if(this.form.phone.length<11){
          this.$alert("Phone number must be 11 digits long");
          return;
      }
      if(this.form.age<15){
          this.$alert("Age must be greater than 15");
          return;
      }
      if(!this.form.email.match(/^\S+@\S+\.\S+$/gi)){
        this.$alert("Email address not valid");
      }
      if(this.form.file1 == null){
        this.$alert("Please upload your CV");
        return;
      }
      //   data.fName = this.form.fName;
      //   data.Lastname = this.form.lName;
      //   data.email = this.form.email;
      //   data.cv = "";
      //   data.phoneNo = this.form.phone;
      //   data.coverLetter = "";
      //   data.age = this.form.age;
      //   data.gender=this.form.gender;
      //   data.dob = this.form.dob;
      //   data.address = this.form.address;
      //   data.cnic = this.form.cnic;
      console.log("form:", this.form);
      if (
        !(
          this.form.file1.name.match(/.pdf/) ||
          this.form.file1.name.match(/.jpg/) ||
          this.form.file1.name.match(/.jpeg/) ||
          this.form.file1.name.match(/.png/)
        )
      ) {
        console.log("file1", this.form.file1);
        return;
      }
      console.log("test", data);
      // data = {fname:this.form.fName,Lastname:this.form.lName,email:this.form.email,cv:"",coverLetter:"",
      // phoneNo:this.form.phone,age:this.form.age,gender:this.form.gender,DOB:this.form.dob,address:this.form.address,cnic:this.form.cnic
      // };
      await vue.axios
        .post("http://192.168.11.209:8080/auth/registration", data)
        .then((res) => {
          console.log(res);
          if (res.status == 201) {
            this.$alert("Successfully Registered");

            // this.$router.push("signin");
            // this.$router.push("register");
          } 
          else {
            console.log("not 201");
            alert("Cannot Register, try again later");
            this.$alert("Cannot Register, try again later");
          }
          // if(res.status == 500){
          //     this.$alert("Server Error Occured");
          // }
          // if(res.status!=201){
          //     this.$alert("Cannot Register, try again later");
          //     // alert(res.error);
          // }
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.status)
          // alert(err.data.error);
          // alert(err.message);
        });
    },
    // onReset(event) {
    //   event.preventDefault()
    //   // Reset our form values
    //   this.form.email = ''
    //   this.form.name = ''
    //   this.form.food = null
    //   this.form.checked = []
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false
    //   this.$nextTick(() => {
    //     this.show = true
    //   })
    // }
  },
};
</script>
<style>
/* body{
    width: 100%;
    height: 100%;

} */
.logo-col {
  /* background-image: url("../assets/logo-x.jpg");
    width: 100px;
    height: 100%; */
}
.header {
  display: flex;
  align-items: center;
  /* align-self: center; */
  /* text-align: center; */
  /* vertical-align: middle; */
}
.reg-form-main {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif !important;

  /* background-color: rgba(219, 219, 219, 0.911); */
  background-image: linear-gradient(45deg, #b1b1b1, #0dcaf0);
  background-attachment: fixed;
  background-size: cover;
  /* width: inherit;
    height: inherit; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
}
.reg-form {
  /* background-color: whitesmoke; */
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  width: 70%;
  /* height: ; */
  text-align: left;
  overflow-y: auto;
  height: 90%;
}
@media only screen and (max-width: 1440px)  {
  .reg-form {
    height: 80%;
    /* height: 60%; */
  }
}
@media only screen and (max-width: 1024px){
  .reg-form {
    height: 90%;
  }
}
@media only screen and (max-width: 425px) {
  .reg-form {
    height: 80%;
  }
}
@media only screen and (max-width: 375px) {
  .reg-form {
    height: 80%;
    width: 80%;
  }
}

.reg-form h3 {
  color: black;
  font-size: medium;

  /* font-style: oblique; */
  font-weight: 700;
  font-size: smaller;
}
.reg-form button {
  background-color: rgb(64, 180, 155);
  border: none;
  width: 48%;
  margin: 1%;
  /* margin: 1rem; */
  /* padding: 0 1rem; */
}
.reg-form input::placeholder {
  font-size: smaller;
}
</style>
