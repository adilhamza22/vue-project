<template>
  <div class="d-flex container mw-100">
    <div class="container">
      <b-img
        src="https://picsum.photos/1024/400/?image=43"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <div class="container">
      <h3>Login</h3>
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
      alert(JSON.stringify(authUser));
      if (authUser) {
        let findUser = authUser.find((item) => {
          return (
            item.email == this.form.email && item.password == this.form.password
          );
        });
        if (findUser) {
          alert("Success!");
          this.$router.push("signup");
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
<style lang=""></style>
