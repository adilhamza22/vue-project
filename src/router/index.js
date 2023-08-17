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
Vue.use(VueRouter);

const routes = [
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
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        path: "/",
        component: CarouselHome,
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
      },{
        path: "/teachers",
        component: HelloWorld,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
