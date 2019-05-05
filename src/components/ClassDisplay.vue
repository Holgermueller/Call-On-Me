<template>
  <div>
    <h3>Select from your list of classes</h3>
    <ul>
      <li>
        <a href>Class names will go here</a>
      </li>
      <li>
        <a href>Class names will go here</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ClassDisplay"
};
</script>

<style scoped>
ul {
  text-decoration: none;
}

a,
a:visited {
  text-decoration: none;
  color: #008000;
}

a:hover {
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}
</style>

