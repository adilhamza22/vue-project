import Vue from "vue";
import VueRouter from "vue-router";
// eslint-disable-next-line no-unused-vars
import HomeView from "../views/HomeView.vue";
import SignUp from "@/components/SignUp.vue";
import SignIn from "@/components/SignIn.vue";
import DashBoard from "@/components/DashBoard.vue";
import UserProfile from "@/components/UserProfile.vue";
import Users from "@/components/UsersData.vue";
import EditProfile from "@/components/EditProfile.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import CarouselHome from "@/components/CarouselHome.vue";
import ChatSupport from "@/components/ChatSupport.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";
import UserApplications from "@/components/UserApplications.vue";
Vue.use(VueRouter);

const routes = [
  // {
  //   path:"/applications",
  //   component: UserApplications,

  // },
  {
    path: "/",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
    // beforeEnter: (to, from) => {

    //   let authUser = JSON.parse(localStorage.getItem("authUser"));
    //   if(authUser=={} && to.path=="/"){
    //     return false;
    //   }
    //   return true;
    // },
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        path: "/",
        component: UserProfile,
        // children:[
        //   {
        //     path:"/chat",
        //     component: ChatSupport,
        //   }
        // ]
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        path: "/profile",
        component: UserProfile,
      },
      {
        path: "/users",
        component: Users,
      },
      {
        path: "/edit",
        component: EditProfile,
      },
      {
        path: "/students",
        component: HelloWorld,
      },
      {
        path: "/teachers",
        component: HelloWorld,
      },
      {
        path:"/applications",
        component: UserApplications,
      }
      
      
    ],
  },
  {
    path:"/register",
    component: RegistrationForm,
  },
  // {
  //   path: "/chat",
  //   component: ChatSupport,
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
