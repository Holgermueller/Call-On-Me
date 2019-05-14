import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@components/Home";
import ClassDisplay from "@components/ClassDisplay";
import StudentList from "@components/StudentList";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
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
