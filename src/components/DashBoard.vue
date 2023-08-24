<template>
  <div>
    <NavBarBrand />
    <div id="home" class="container mw-100">
      <div class="left-main container">
        <nav>
          <router-link
            @click="removeOverlay()"
            to="/profile"
            class="d-flex justify-content-between"
            >Visit Profile <i class="bi bi-person-square"></i
          ></router-link>
          <router-link to="/users" class="d-flex justify-content-between">
            Display Users <i class="bi bi-people"></i
          ></router-link>
          <router-link to="/edit" class="d-flex justify-content-between">
            Edit Profile <i class="bi bi-person-gear"></i
          ></router-link>
          <router-link to="/students" class="d-flex justify-content-between">
            Students <i class="bi bi-mortarboard-fill"></i></router-link>
          <router-link to="/teachers" class="d-flex justify-content-between">
            Teachers<i class="bi bi-person-workspace"></i></router-link>
            <router-link to="applications" class="d-flex justify-content-between">
            Applications<i class="bi bi-r-square"></i></router-link>
          <!-- <router-link to="/chat" class="d-flex justify-content-between">
            Chat Support<i class="bi bi-chat"></i></router-link> -->
        </nav>
      </div>
      <div class="right-main container">
        <router-view v-if="showChat==false"/>
        <div class="render-chat-container">
          <ChatSupport v-if="showChat"/>
        </div>
        <div class="chat-support-toggler" @click="showChatSupport()">
          <i class="bi bi-chat chat-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import UserProfile from "@/components/UserProfile.vue";
import NavBarBrand from "@/components/NavBarBrand.vue";
import ChatSupport from "@/components/ChatSupport.vue";
import UserApplications from "@/components/UserApplications.vue";
export default {
  name: "DashBoard",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    UserProfile,
    NavBarBrand,
    ChatSupport,
    UserApplications,
  },
  data() {
    return {
      rightContainerNotOpen: true,
      showChat:false,
    };
  },
  methods: {
    removeOverlay() {
      this.rightContainerNotOpen = false;
      console.log(this.rightContainerNotOpen);
    },
    showChatSupport(){
      this.showChat = !this.showChat;
      if(this.showChat==false){
        document.querySelector(".render-chat-container").style.display = "none";
      }
      else{
        document.querySelector(".render-chat-container").style.display = "block";

      }

    }
  },
  mounted(){
    if(this.showChat==false){
        document.querySelector(".render-chat-container").style.display = "none";
      }
  }
  // beforeCreate() {
  //   alert("beforeCreate parent")
  // },
  // created(){
  //   alert("created parent")
  // },
  // beforeMount() {
  //   alert("beforeMount parent")
  // },
  // mounted() {
  //   alert("mounted parent")
  // },
};
</script>
<style scoped>
.chat-icon{
  font-size: 1.75rem;
  font-weight: lighter;
}
.render-chat-container{
  position: absolute;
  right:0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.chat-support-toggler{
  display: flex;
  justify-content: center;
  align-items: center;
  position:fixed;
  right:2%;
  bottom:2%;
  border-radius: 5px;
  background-color: rgb(31, 105, 83,0.9);
  color: white;
  width:50px;
  height:50px;
  z-index: 10;
}
.chat-support-toggler:hover{
  cursor: pointer;
}
nav a{
  text-decoration: none;
}
@media only screen and (max-width: 768px) {
  .left-main {
    display: none !important;
  }
}
@media only screen and (max-width: 768px) {
  .right-main {
    width: 70%;
  }
}
#home {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  height: 100vh;
  color: rgb(2, 11, 43);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.left-main {
  display: flex;
  flex-direction: column;
  /* background-image: linear-gradient(270deg, rgb(63, 63, 122), black); */
  width: 30%;
  border-radius: 1px;

  /* background-color: #14858575; */
  background-image: linear-gradient(
    270deg,
    rgb(14, 14, 65, 0.9),
    rgb(19, 34, 66, 0.9)
  );
}
.left-main nav {
  display: flex;
  flex-direction: column;
  color: black;
  padding: 0;
}
.left-main nav a {
  /* color: rgb(81, 82, 82); */
  align-items: center;

  color: white;
  font-size: 1rem;
  border-bottom: 1px solid white;
  padding: 10px 0;
  margin: 10px 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.left-main router-link {
}
.right-main {
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  /* z-index: -1; */
}
/* .right-main img{
  width: 100%;
  height: 100%;
} */
</style>
