<script>
// import { NavBar } from "@/components/NavBar.vue";
</script>
<template>
  <div id="home" class="container mw-100">
    <!-- <h1>HomePage</h1> -->
    <div class="left-main container">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view />
    </div>
    <div class="right-main container">
      <table></table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
#home {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 0;
  height: 80vh;
}
.left-main {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(270deg, rgb(63, 63, 122), black);
  width: 30%;
  border-radius: 10px;
}
.left-main nav {
  display: flex;
  flex-direction: column;
  color: azure;
}
.left-main nav a {
  color: azure;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.5rem;
  border-bottom: 1px solid snow;
  padding: 10px 0;
}
</style>
