<template>
  <div class="main-user-applications">
    <div v-if="loading">
      <Loader />
    </div>
    <div class="loaded-users" v-if="!loading">
      <div class="filters-div row  d-flex align-items-center flex-wrap">

        <div class="filter-icons col-2" @click="sortDesc()"><i class="bi bi-sort-down"></i></div>
        <div class="filter-icons col-2" @click="sortAsc()"><i class="bi bi-sort-up col"></i></div>
        <b-dropdown class="filter-icons col-2 d-flex align-items-baseline filter-dropdown-btn" variant="none" style="background: white !important;color: black;border: none;">
          <template #button-content>
            <i class="bi bi-funnel"></i>
          </template>
          <b-dropdown-item @click="getUsers()">All Users</b-dropdown-item>
          <b-dropdown-item @click="acceptedUsers()">Approved Users</b-dropdown-item>
          <b-dropdown-item @click="rejectedUsers()">Rejected Users</b-dropdown-item>
        </b-dropdown>
        
        <div class="filter-icons col d-flex ">
          <b-form-input class="mx-2" v-model="searchText" placeholder="Search Applications"></b-form-input>
          <b-button class="mx-2" @click="filterUsers()">Search</b-button>
        </div>
      </div>

      <div class="overflow-auto">

        <b-table id="all-table" striped hover :items="users[0]" :fields="fields" :per-page="perPage"
          :current-page="currentPage" small v-if="showFilter == false">
          <template v-slot:cell(CV)="{ item  }">
            <span><b-btn @click="downloadCV(item._id)">Download</b-btn></span>
          </template>
          <!-- <template v-slot:cell(status)="{ item  }">
            <span><b-btn @click=""></b-btn></span>
          </template> -->
        </b-table>



        <b-table striped hover :items="filteredUsers[0]" :fields="fields"  v-if="showFilter == true"></b-table>

        <b-pagination class="pagination-nav" v-model="currentPage" pills size="md" :total-rows="totalUsers"
          :per-page="perPage" style="font-size: small; display: flex; justify-content: center;"
          aria-controls="all-table">
        </b-pagination>

      </div>
    </div>

  </div>
</template>
  
<script>
import vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Loader from "./Loader.vue";
vue.use(VueAxios, axios);
export default {
  data() {
    return {
      // users: [
      //   { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      //   { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      //   { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      //   { age: 38, first_name: 'Jami', last_name: 'Carney' }
      // ],
      searchText: '',
      users: [],
      fields: ["Fname", "Lastname", "status", "age", "gender", "address", "cnic", "CV"],
      filteredUsers: [],
      showFilter: false,
      pageUsers: '',
      numOfPages: '',
      currentPage: 1,
      // rows:10,
      perPage: 10,
      totalUsers: '',
      loading: false,
    }
  },
  components: {
    Loader,
  },
  mounted() {
    console.log("mounted");
    // setTimeout(()=>{
    //     this.getUsers();
    // },1000);
    this.getUsers();
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`;
    },
    async getUsers() {
      this.loading = true;
      setTimeout(() => {
        //https://dummyjson.com/products/1 fake api
        //http://192.168.11.209:8080/user

        vue.axios.get("http://192.168.11.209:8080/user").then((res) => {
          console.log("getusers:", res.data.length);
          this.totalUsers = res.data.length;
          // alert (res.data);
          this.users.push(res.data);
          console.log("users", this.users);
          this.loading = false;
        }).catch((err) => {
          console.log(err.message);
        });
      }, 3000);
      
    },

    async sortAsc() {
      await vue.axios.get("http://192.168.11.209:8080/sort", { params: { order: "asc", field: "Fname" } }).then((res) => {
        console.log(res);
        // alert (res.data);
        this.users = [];
        this.users.push(res.data);

        // console.log("users",this.users);

      }).catch((err) => {
        console.log(err.message);
      });
      // if(this.users[0].length>0){
      //     this.users[0].sort((a,b) => {
      //     return a.age - b.age;
      // })
      // }
    },

    async sortDesc() {
      // debugger
      await vue.axios.get("http://192.168.11.209:8080/sort", { params: { order: "desc", field: "Fname" } }).then((res) => {
        // alert (res.data);
        this.users = [];
        this.users.push(res.data);

        // console.log("users",this.users);

      }).catch((err) => {
        console.log(err.message);
      });
      //   console.log("sortdesc");
      //  if(this.users[0].length>0){
      //   this.users[0].sort((a,b) => {
      //       return b.age - a.age;
      //   })
      //  }
      //  console.log("users",this.users);
    },
    async filterUsers() {
      await vue.axios.get("http://192.168.11.209:8080/search", { params: { query: this.searchText } }).then((res) => {
        console.log(res.data);
        // alert (res.data);
        this.filteredUsers = [];
        this.filteredUsers.push(res.data);

        // console.log("users",this.users);

      }).catch((err) => {
        console.log(err.message);
      });
      this.showFilter = !this.showFilter;
      // if(this.users[0].length>0){
      //     this.filteredUsers = this.users[0].filter((user) => {
      //       return user.age > 30;
      //     })
      // }
    },
    async paginatedUsers() {
      await vue.axios.get("http://192.168.11.209:8080/pagination", { params: { page: "1", perPage: this.totalUsers } }).then((res) => {
        // alert (res.data);
        console.log(res);
        this.users = [];
        this.users.push(res.data.users);
        this.numOfPages = res.data.totalUser;
        // console.log("users",this.users);
      }).catch((err) => {
        console.log(err.message);
      });
    },
    async downloadCV(uid) {
      console.log("UID:",uid);
      await vue.axios({
        url: `http://192.168.11.209:8080/cv/${uid}`,
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');
        // var fileLink = document.getElementById

        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'file.pdf');
        document.body.appendChild(fileLink);
        console.log("filelink", fileLink);
        console.log("fileurl", fileURL);
        fileLink.click();
      }).catch((err) => {
        console.log(err.message);
      });
    },
    async acceptedUsers(){
      await vue.axios.get("http://192.168.11.209:8080/filterBy?query=accepted").then((res)=>{
        console.log(res);
        this.users=[];
        this.users.push(res.data);
      }).catch((err)=>{
        console.log(err);

      });
    },
    async rejectedUsers(){
      await vue.axios.get("http://192.168.11.209:8080/filterBy?query=rejected").then((res)=>{
        console.log(res);
        this.users=[];
        this.users.push(res.data);
      }).catch((err)=>{
        console.log(err);

      });
    },
  }




}
</script>
<style scoped>
.main-user-applications {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 5%;

}

.main-user-applications table {
  border-color: aqua;
  /* padding: 1%; */
  /* margin: 1%; */
}

.filters-div {
  padding: 1%;
}

.filters-div i {
  font-size: 1.75rem;
  font-weight: lighter;
}

.filters-div .filter-dropdown-btn {
  background: white !important;
  color: black !important;
  border: none !important;
}
.filter-icons:hover {
  cursor: pointer !important;
}

.filter-icons input::placeholder {
  font-size: x-small;
}

.pagination-nav li:active {
  background-color: teal !important;
  color: teal !important;
}
</style>
  