<template>
  <form action="">
    <input type="text" name="" id="" placeholder="Class name here...">
    <input type="submit" value="SUBMIT">
  </form>
</template>

<script>
export default {
  name: "ClassInput"
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }
</style>

