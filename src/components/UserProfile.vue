<template>
  <div class="card profile-card">
    <img src="../assets/avatar.jpeg" class="card-img-top" alt="Person Image" />
    <div class="card-body">
      <p class="card-text user-card-data">
        <h5 class="mb-1">{{ name }}</h5>
                  <p class="logged in : 
mb-2 pb-1" style="color: #2b2a2a">
                    <Sub>Senior Journalist</Sub>
                  </p>
                  <p class="mb-0 mx-4">
                    <sub><strong>Email: </strong>
                        <i><b>{{ email }}</b></i>
                      </sub>
                  </p>
      </p>
    </div>
    <div class="card-footer"><button type="button" class="btn btn-primary btn-sm mx-1" @click="showUsers()">Show Users</button>
<button type="button" class="btn btn-secondary btn-sm mx-1" @click="editProfile()" >Edit Profile</button></div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      name: "",
      Fname:"",
      Lname:"",
      email: "",
    };
  },
  mounted() {
    console.log("mounted");
    this.getData();
  },
  methods: {
    getData() {
      let myUser = JSON.parse(localStorage.getItem("authUser"));
      let clickUser = JSON.parse(localStorage.getItem("clickUser"));
      let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      // let userObjCurr = myUser.find((item) => item.email == clickUser.email);
      let currname, email;
      if (loggedInUser) {
        currname = loggedInUser.Fname + loggedInUser.Lname;
        this.name = currname;
        currname = currname.toUpperCase();
        email = loggedInUser.email;
      }
      console.log(clickUser, " ClickUser");
      // console.log(userObjCurr, " userobjCurr");
      console.log("loggedin", loggedInUser);
      console.log("runnig");
      this.name = currname;
      this.email = email;
    },
    showUsers(){
      window.location.href = "users";
    },
    editProfile(){
      window.location.href = "edit";
      
    }
  },
};
</script>

<style scoped>
.right-main{
  bottom: 5%;
}
.profile-card{
  width: 20rem;
    position: absolute;
    top: 3%;
}
#user-profile {
  color: black;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: lighter;
}
.user-card-data{
  border-top: 1px solid rgb(122, 226, 191);
}
/* #card-btn{
  background-image: linear-gradient(270deg, rgb(14, 14, 65,0.9), rgb(19, 34, 66,0.9));
}
.card-container{
  box-shadow: 2px 2px 2px 2px gray;
  border-radius: 10px;
} */
</style>
