<template>
  <div id="app">
    <Header/>
    {{msg}}
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import ClassDisplay from "./components/ClassDisplay";
import StudentList from "./components/StudentList";
import Footer from "./components/Layout/Footer";

export default {
  name: "app",
  components: {
    Header,
    Home,
    ClassDisplay,
    StudentList,
    Footer
  },
  data() {
    return {
      msg:
        "Use this app to call on one of your students without worrying about who to choose!"
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
