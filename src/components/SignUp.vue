/* eslint-disable */
<template>
  <div class="d-flex container mw-100 main">
    <div class="container left-container">
      <b-img
        class="left-img"
        src = "https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        fluid
        alt="Responsive image"
      ></b-img>
      <!-- <img src ="../assets/logoipsum-227.svg" class="left-logo"  width="250px" > -->
    </div>
    <div class="container right-container">
      <!-- <img src ="../assets/logoipsum-227.svg" class="left-logo"  width="250px" > -->
      <img src ="../assets/color-logo- no-bg.svg" class="left-logo"  width="250px" >

      <h3>SignUp</h3>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.Fname"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.Lname"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>


        <b-form-group
          id="input-group-2"
          label="Your Password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger" @click="onSignIn"
          >Login</b-button
        >
      </b-form>
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
        Fname: "",
        Lname: "",
        password: "",
        success:true,
      },
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      let formData = this.form;
      // alert(JSON.stringify(this.form));
      // console.log(this.email);
      let user = {
        email: formData.email,
        Fname: formData.Fname,
        Lname: formData.Lname,
        password: formData.password,
      };
      // alert(JSON.stringify(user));

      let authUser = JSON.parse(localStorage.getItem("authUser"));
      
     
        //send axios 
        await vue.axios.post("http://192.168.11.209:8080/auth/signup", user).then((res) => {
          console.log(res.data.message);
          if(res.status==201){
            if (authUser) {
              authUser.push(user);
              localStorage.setItem("authUser", JSON.stringify(authUser));
              this.$alert("SuccessFully Signed Up");
              this.$router.push("signin");
            }
            if (!authUser) {
              let authUser = [];
              authUser.push(user);
              localStorage.setItem("authUser", JSON.stringify(authUser));
              this.$alert("SuccessFully Signed Up");
              this.$router.push("signin");
            }  
          }
        }).catch((err) => {
          console.log(err.message);
        });
        // let socket = io("http://192.168.11.209:8080");
        // socket.emit("signup", user);
      
      
      
      console.log(authUser);
      // this.form[input] = value

      // let storedForm = this.openStorage() // extract stored form
      // if (!storedForm) storedForm = {} // if none exists, default to empty object

      // storedForm[input] = value // store new value
      // this.saveStorage(storedForm) // save changes into localStorage
    },
    onSignIn(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.Fname = "";
      this.form.Lname = "";
      this.form.password="";
      // this.form.food = null;
      // this.form.checked = [];
      window.location.href = "signin";

      // Trick to reset/clear native browser form validation state
      // this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
    },
  },
};
</script>
<style scoped>
.main {
  /* height: 80vh; */
  height: 100%;
  position: absolute;
  padding: 0;
  /* top: 10%; */

}
.left-container{
  position: relative !important;
}
.left-container .left-img{
  z-index: 1 !important; 
  position: absolute;
  left: 0 ;
  opacity: 0.8;
  width: 100%;
}
/* .left-container .left-logo{
  z-index: 2 !important;
  position: absolute !important;
  left: 0%;
  top:0;
  height: 10% !important;
  
} */
.right-container {
  /* height: 70vh; */
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-self: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* added */
  /* border: 1px solid gray; */
  border-radius: 5%;
    /* margin: 0 1%; */
    box-sizing: border-box;
    padding: 1%;
    /* box-shadow: 1px 1px 1px 1px lightgray; */

}
.right-container h3 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2.25rem !important;
  font-style: oblique;
  /* color:royalblue !important; */
  color: #2c3e50 !important;

}
.right-container div {
  text-align: start;
}
.right-container button {
  width: 10vw;
  /* background-color: dodgerblue !important; */
  background-color: #00ade3 !important;

  border: none;
  margin: 1%;
  /* background-color: #2a343f; */
}
.right-container form {
  width: 30vw;
}
.left-container img {
  height: 100%;
  /* border-radius: 10px; */
}
@media only screen and (max-width: 768px) {
  body {
    background-image: linear-gradient(70deg, rgb(20, 20, 80), rgb(7, 7, 37));
  }
  .main {
    color: black;
    /* background-image: url("https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"); */
  }
  .left-container {
    display: none;
    color: black;
  }
  .right-container{
    height: 98%;
    width: 90%;
       /* border: 1px solid gray; */
       border-radius: 5%;
    /* margin: 0 1%; */
    box-sizing: border-box;
    padding: 1%;
    box-shadow: 2px 2px 2px 2px gray;
  }
  .right-container form {
    width: 70%;
  }
  .right-container button {
    width: 50%;
    /* background-image: linear-gradient(70deg, rgb(20, 20, 80), rgb(7, 7, 37)); */
  }
}
@media only screen and (max-width: 375px) {
  .right-container form {
    width: 100%;
  }
}
</style>
