<template>
  <div class="d-flex container mw-100 main">
    <div class="container left-container">
      <b-img
        src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=806&q=80"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <div class="container right-container">
      <h3>LogIn</h3>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));

      let authUser = JSON.parse(localStorage.getItem("authUser"));
      let clickUser;
      alert(JSON.stringify(authUser));
      if (authUser) {
        let findUser = authUser.find((item) => {
          return (
            item.email == this.form.email && item.password == this.form.password
          );
        });
        if (findUser) {
          alert("Success!");
          clickUser = {
            email: findUser.email,
            name: findUser.name,
            password: findUser.password,
          };
          localStorage.setItem("clickUser", JSON.stringify(clickUser));
          this.$router.push("dashboard");
        }
        if (!findUser) {
          alert("Please signup first");
        }
      }
      if (!authUser) {
        alert("Signup first");
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
.main {
  height: 80vh;
  position: absolute;
  top: 10%;
  color: black;
}

.left-container,
.right-container {
  height: 70vh;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-self: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
}
.right-container h3 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 3rem !important;
  font-style: oblique;
}
.right-container div {
  text-align: start;
}
.right-container h3{
  color: #2C3E50;
}
.right-container button {
  width: 10vw;
  background-color:#2a343f;
  

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
