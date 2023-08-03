<template>
  <div class="main container">
    <nav></nav>
    <table class="table table-dark responsive">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Username</td>
        <td>Email</td>
        <td>More</td>
      </tr>
      <MoreDetails
        v-if="modalOpen"
        @close="modalOpen = false"
        :data="this.modalData"
      />
      <tr v-for="item in list" v-bind:key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.email }}</td>
        <td>
          <b-button @click="moreDetails(item.address)" v-b-modal.modal-1
            >View Details</b-button
          >
        </td>

        <!-- <b-modal v-if="modalOpen==true" :data="modalData" id="modal-1" title="Address Details">
          <p class="my-4"> <h3>City:</h3> {{ modalData.city }}</p>
          <p class="my-4"> <h3>ZipCode:</h3> {{ modalData.zipcode }}</p>
          <p class="my-4"> <h3>Street:</h3> {{ modalData.street }}</p>
          <p class="my-4"> <h3>Suite:</h3> {{ modalData.suite }}</p>
        </b-modal> -->
        <!-- <ModalDetails :user="modalData" /> -->
      </tr>
    </table>
  </div>
</template>

<script>
import vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import MoreDetails from "@/components/MoreDetails.vue";
vue.use(VueAxios, axios);
export default {
  mounted() {
    vue.axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      this.data = res.data;
      localStorage.setItem("usersData", JSON.stringify(res.data));
      this.list = res.data;
    });
  },
  data() {
    return {
      modalOpen: false,
      modalData: null,
      list: undefined,
      //   items: [
      //     { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
      //     { age: 21, first_name: "Larsen", last_name: "Shaw" },
      //     { age: 89, first_name: "Geneva", last_name: "Wilson" },
      //     { age: 38, first_name: "Jami", last_name: "Carney" },
      //   ],
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MoreDetails,
  },
  methods: {
    moreDetails(data) {
      this.modalOpen = true;
      this.modalData = data;
    },
  },
};
</script>
