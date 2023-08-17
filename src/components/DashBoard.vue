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
            Students <i class="bi bi-person-gear"></i
          ></router-link>
          <router-link to="/teachers" class="d-flex justify-content-between">
            Teachers<i class="bi bi-person-gear"></i
          ></router-link>
        </nav>
      </div>
      <div class="right-main container">
        <!-- <div v-show="rightContainerNotOpen">
          <b-card
            overlay
            img-src="https://picsum.photos/900/250/?image=3"
            img-alt="Card Image"
            text-variant="white"
            title="Image Overlay"
            sub-title="Subtitle"
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>
        </div> -->
        <!-- <img class="responsive" src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"> -->

        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import UserProfile from "@/components/UserProfile.vue";
import NavBarBrand from "@/components/NavBarBrand.vue";
export default {
  name: "DashBoard",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    UserProfile,
    NavBarBrand,
  },
  data() {
    return {
      rightContainerNotOpen: true,
    };
  },
  methods: {
    removeOverlay() {
      this.rightContainerNotOpen = false;
      console.log(this.rightContainerNotOpen);
    },
  },
};
</script>
<style scoped>
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
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
}
/* .right-main img{
  width: 100%;
  height: 100%;
} */
</style>
