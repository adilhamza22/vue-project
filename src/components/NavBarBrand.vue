<template lang="">
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Data Portal X</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/dashboard">Home</b-nav-item>
          <b-nav-item href="/users" class="responsive-nav-item">Display Users</b-nav-item>
          <b-nav-item href="/profile" class="responsive-nav-item">Profile</b-nav-item>
          <b-nav-item href="/edit"class="responsive-nav-item">Edit Profile</b-nav-item>
          <b-nav-item href="/students"class="responsive-nav-item">View Students</b-nav-item>
          <b-nav-item href="/teachers"class="responsive-nav-item">View Teachers</b-nav-item>
          <!-- <b-nav-item href="/about">About Us</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form> -->

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em> <i class="bi bi-person-square logout-menu-avatar"></i> </em>
            </template>
            <!-- <b-dropdown-item href="#">Profile</b-dropdown-item> -->
            <b-dropdown-item @click="logOut()" id="sign-out">
              Sign Out <i class="bi bi-box-arrow-left"></i
            ></b-dropdown-item>
            <b-dropdown-item href="/profile" id="sign-out">
              Profile <i class="bi bi-person-square logout-menu-avatar"></i></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    logOut() {
      let clickUser = {};
      localStorage.setItem("clickUser", JSON.stringify(clickUser));
      //   this.$router.go = "signin";
      window.location.href = "signin";
      //    this.$router.push("dashboard");
    },
  },
};
</script>

<style>
.responsive-nav-item{
  display: none;
}
@media only screen and (max-width:768px){
  .responsive-nav-item{display: block;}
}
#sign-out {
  display: flex;
  justify-content: space-between;
}
.logout-menu-avatar {
  /* height: 20px; */
}
</style>
