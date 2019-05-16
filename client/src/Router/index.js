import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import ClassDisplay from "../components/ClassListDisplay";
import StudentList from "../components/StudentList";
import Register from "../components/Register";
import SignIn from "../components/SignIn";

Vue.use(VueRouter);

export default new VueRouter({
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
      path: "/:class_display_id",
      name: "ClassDisplay",
      component: ClassDisplay
    },
    {
      path: "/:student_list_id",
      name: "StudentList",
      component: StudentList
    }
  ]
});
