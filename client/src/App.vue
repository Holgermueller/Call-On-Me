<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import ClassRoster from "./components/ClassRoster";
import Footer from "./components/Layout/Footer";

export default {
  name: "app",
  components: {
    Header,
    Home,
    InstructorProfile,
    ClassRoster,
    Footer
  },
  data() {
    return {};
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
