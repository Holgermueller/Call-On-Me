<template>
  <div id="app">
    <Header/>
    {{msg}}
    <ClassInput/>
    <ClassList/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Layout/Header";
import ClassInput from "./components/AddClass";
import ClassList from "./components/ClassDisplay"
import Footer from "./components/Layout/Footer";

export default {
  name: "app",
  components: {
    Header,
    ClassInput,
    ClassList,
    Footer
  },
  data() {
    return {
      msg: "hello!"
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
