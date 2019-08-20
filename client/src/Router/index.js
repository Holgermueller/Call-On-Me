import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import ClassRoster from "../components/ClassRoster";
import InstructorProfile from "../components/InstructorProfile";

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
      path: "/:instructor_profile_id",
      name: "InstructorProfile",
      component: InstructorProfile,
      props: true
    },
    {
      path: "/class_roster/:id",
      name: "ClassRoster",
      component: ClassRoster,
      props: true
    }
  ]
});
