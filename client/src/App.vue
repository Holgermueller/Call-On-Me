<template>
  <v-app>
    <v-content>
      <Header />
      <router-view></router-view>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import ClassRoster from "./components/ClassRoster";
import Footer from "./components/Layout/Footer";

export default {
  name: "App",
  components: {
    Header,
    Home,
    InstructorProfile,
    ClassRoster,
    Footer
  },
  data: () => ({
    //
  })
};
</script>
