.right-container small<template>
  <div class="d-flex container mw-100 main">
    <div class="container left-container">
      <b-img
        class="left-img"
        src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <div class="container right-container">
      <img src ="../assets/color-logo- no-bg.svg" class="left-logo"  width="250px" >
      
      <h3>LogIn</h3>
      <b-form @submit="onSubmit" v-if="show">
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
        <b-button type="reset" variant="danger" @click="onSignUp"
          >SignUp</b-button
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
        name: "",
        Fname:"",
        Lname:"",
        password: "",
        loggedInUser: [],
      },
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      debugger
      event.preventDefault();
      // alert(JSON.stringify(this.form));

      let authUser = JSON.parse(localStorage.getItem("authUser"));
      let clickUser ={
        email: this.form.email,
        password: this.form.password,
      }
      // alert(JSON.stringify(authUser));

       await vue.axios.post("http://192.168.11.209:8080/auth/login", clickUser).then((res) => {
            console.log(res);
            if(res.status==200){
              // this.loggedInUser.push(res.user);
              this.loggedInUser = res.data.user;
              this.email = res.data.user.email;
              this.Fname = res.data.user.Fname;
              this.Lname = res.data.user.Lname;
              this.name = this.Fname + this.Lname;
              console.log("logged in :",this.loggedInUser);
              localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser));
              this.$alert("Success!");
              this.$router.push("dashboard");
            }
            else{
              this.$alert("Please signup first or check your credentials");
            }
       
            
          }).catch((err) => {
            console.log(err.message);
            console.log(err);
            console.log(err.response.request.status);
            if(err.response.request.status==404){
              this.$alert("Error Signing In, Please try again or signup first");
            }
            // alert("Error Signing In, Please try again or signup first");

          });




      // if (authUser) {
      //   let findUser = authUser.find((item) => {
      //     return (
      //       item.email == this.form.email && item.password == this.form.password
      //     );
      //   });
      //   if (findUser) {
      //     alert("Success!");
      //     clickUser = {
      //       email: findUser.email,
      //       name: findUser.name,
      //       password: findUser.password,
      //     };
      //     localStorage.setItem("clickUser", JSON.stringify(clickUser));
         
      //     this.$router.push("dashboard");
      //   }
      //   if (!findUser) {
      //     alert("Please signup first");
      //   }
      // }
      // if (!authUser) {
      //   alert("Signup first");
      // }
    },
    onSignUp(event) {
      event.preventDefault();
      // Reset our form values
        // this.form.email = "";
        // this.form.name = "";
        // this.form.food = null;
        // this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      // this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
      // this.$router.push("/signup");
      window.location.href = "signup";
    },
  },
};
</script>
<style scoped>
.main {
  /* height: 80vh; */
  height: 100%;
  padding: 0;
  position: absolute;
  /* top: 10%; */
  color: black;
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
.left-container img{
  border-radius: 0 !important;
}
.right-container {
  /* height: 70vh; */
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-self: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
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

}
::v-deep .right-container label{
  font-size: small !important;
}
::v-deep .right-container small{
  font-size: x-small !important;
}
.right-container div {
  text-align: start;
}
.right-container h3 {
  color: #2c3e50 !important;
}
.right-container button {
  width: 10vw;
  border: none;
  margin: 1%;
  /* background-color: #2a343f; */
  /* background-color: dodgerblue !important; */
  background-color: #00ade3 !important;

}
.right-container form {
  width: 30vw;
}
.left-container img {
  height: 100%;
  border-radius: 10px;
}
@media only screen and (max-width: 768px) {
  .main {
    color: black;
  }
  .left-container {
    display: none;
    color: black;
  }
  .right-container{
    height: 80%;
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
