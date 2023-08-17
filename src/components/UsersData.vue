<template>
  <div class="main container">
    <!-- <div id ="spinner-loading" v-if="loading">
        <b-button variant="primary" disabled>
        <b-spinner small type="grow"></b-spinner>
        Loading...
       </b-button>
    </div> -->
    
    <table class="table table-primary user-table">
      <tr v-if="!loading">
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>More</th>
      </tr>
      <MoreDetails
        v-if="modalOpen"
        @close="modalOpen = false"
        :data="this.modalData"
      />
      <div v-if="loading">
        <Loader />
      </div>
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
import Loader from "./Loader.vue";
// import { set } from "vue/types/umd";

vue.use(VueAxios, axios);
export default {
  
  data() {
    return {
      modalOpen: false,
      modalData: null,
      list: undefined,
      loading:false,
      //   items: [
      //     { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
      //     { age: 21, first_name: "Larsen", last_name: "Shaw" },
      //     { age: 89, first_name: "Geneva", last_name: "Wilson" },
      //     { age: 38, first_name: "Jami", last_name: "Carney" },
      //   ],
    };
  },
  mounted() {
      this.loading = true;
      setTimeout(() => {
        vue.axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log(res.data);
        this.data = res.data;
        localStorage.setItem("usersData", JSON.stringify(res.data));
        this.list = res.data;
        this.loading = false;
        });
      }, 3000);

    
    
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MoreDetails,
    Loader
},
  methods: {
    moreDetails(data) {
      this.modalOpen = true;
      this.modalData = data;
    },
  },
};
</script>
<style>
.right-main {
  position: relative;
  /* height: 90vh; */
}
.main {
  position: absolute;
  top: 0;
}
.user-table {
  margin: 1% 0;
  position: absolute;
  top: 0 !important;
  background-color: #ffffff !important;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
@media only screen and (max-width: 768px){
  .right-main {
      width: 90%!important;
  }
  .right-main button{
    font-size: small;
    padding: 5%;
  };
}
.right-main th,td{
  padding: 0.25rem!important;
  font-size: small;
}
@media only screen and (max-width:425px) {
  .right-main th,td{
    font-size: x-small;
  }
  .right-main button{
    font-size: x-small;
    padding: 5%;
  }
}
.user-table button {
  /* background-image: linear-gradient(270deg, rgb(63, 63, 122,0.5), black); */
}
</style>
