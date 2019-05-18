<template>
  <div>
    <h3>Add a class:</h3>
    <div class="row">
      <form @submit.prevent="saveClass" class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input
              type="text"
              v-model="class_name"
              id="class_name"
              placeholder="Ex.: Multicultural Lit T-Th"
            >
          </div>
        </div>
        <button type="submit" class="waves-effect waves-light btn-large">ADD CLASS</button>
      </form>
    </div>

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
  name: "ClassDisplay",
  data() {
    return {
      class_name: null
    };
  },
  methods: {
    saveClass: function() {
      const class_name = this.class_name;
      console.log(class_name);
    }
  }
};
</script>

<style scoped>
</style>

