<template>
  <div class="card profile-card">
    <img src="../assets/avatar.jpeg" class="card-img-top" alt="Person Image" />
    <div class="card-body">
      <p class="card-text user-card-data">
        <h5 class="mb-1">{{ name }}</h5>
                  <p class="mb-2 pb-1" style="color: #2b2a2a">
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
  <!-- <div id="user-profile" @load="this.getData()">
    <h2>{{ name }}</h2>
    <p >{{ message }}</p>
  </div> -->
  <!-- <div style = "background-image: linear-gradient(270deg, rgb(14, 14, 65,0.9), rgb(19, 34, 66,0.9)); width: 80%" class="">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-10">
          <div class="card" style="border-radius: 15px">
            <div class="card-body p-4">
              <div class="d-flex text-black">
                <div class="flex-shrink-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    class="img-fluid"
                    style="width: 180px; border-radius: 10px"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h5 class="mb-1">{{ name }}</h5>
                  <p class="mb-2 pb-1" style="color: #2b2a2a">
                    Senior Journalist
                  </p>
                  <div
                    class="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style="background-color: #efefef"
                  >
                  <div>
                      <p class="small text-muted mb-1">Articles</p>
                      <p class="mb-0">41</p>
                    </div> 
                    <div class="px-3">
                      <p class="small text-muted mb-1">Followers</p>
                      <p class="mb-0">976</p>
                    </div>
                    <div>
                      <p class="small text-muted mb-1">Rating</p>
                      <p class="mb-0">8.5</p>
                    </div>
                    <div>
                      <p class="small text-muted mb-1">Email</p>
                      <p class="mb-0 mx-4">
                        <i>{{ email }}</i>
                      </p>
                    </div>
                  </div>
                  <div class="d-flex pt-1">
                    <button
                      type="button"
                      class="btn btn-outline-primary me-1 flex-grow-1 mx-2"
                    >
                      Account
                    </button>
                    <button type="button" class="btn btn-primary flex-grow-1 mx-2">
                      Followers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      name: "",
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
      let userObjCurr = myUser.find((item) => item.email == clickUser.email);
      let currname, email;
      if (userObjCurr) {
        currname = userObjCurr.name;
        this.name = currname;
        currname = currname.toUpperCase();
        email = userObjCurr.email;
      }
      console.log(clickUser, " ClickUser");
      console.log(userObjCurr, " userobjCurr");
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
