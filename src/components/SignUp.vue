/* eslint-disable */
<template>
  <div class="d-flex container mw-100 main">
    <div class="container left-container">
      <b-img
        src="https://picsum.photos/1024/400/?image=2"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <div class="container right-container">
      <h3>SignUp for X</h3>
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

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
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
      let formData = this.form;
      alert(JSON.stringify(this.form));
      // console.log(this.email);
      let user = {
        email: formData.email,
        name: formData.name,
        password: formData.password,
      };
      alert(JSON.stringify(user));

      let authUser = JSON.parse(localStorage.getItem("authUser"));

      if (authUser) {
        authUser.push(user);
        localStorage.setItem("authUser", JSON.stringify(authUser));
      }
      if (!authUser) {
        let authUser = [];
        authUser.push(user);
        localStorage.setItem("authUser", JSON.stringify(authUser));
      }
      this.$router.push("signin");
      console.log(authUser);
      // this.form[input] = value

      // let storedForm = this.openStorage() // extract stored form
      // if (!storedForm) storedForm = {} // if none exists, default to empty object

      // storedForm[input] = value // store new value
      // this.saveStorage(storedForm) // save changes into localStorage
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
<style>
.main {
  height: 55vh;
  position: absolute;
  top: 20%;
}
.left-container,
.right-container {
  height: 50vh;
}
.left-container img {
  height: 100%;
  border-radius: 10px;
}
</style>
