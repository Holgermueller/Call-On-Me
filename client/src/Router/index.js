import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import InstructorProfile from "../components/InstructorProfile";
import ClassRoster from "../components/ClassRoster";
import Register from "../components/Register";
import SignIn from "../components/SignIn";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/:instructor_profile_id",
      name: "InstructorProfile",
      component: InstructorProfile
    },
    {
      path: "/:class_roster_id",
      name: "ClassRoster",
      component: ClassRoster
    }
  ]
});
