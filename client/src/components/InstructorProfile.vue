<template>
  <div>
    <h3 class="form-header">Add a class:</h3>
    <div class="row">
      <form @submit.prevent="saveClass" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              type="text"
              v-model="class_name"
              id="class_name"
              placeholder="Ex.: Multicultural Lit T-Th 9-9:50"
            >
          </div>
        </div>
        <div class="button">
          <button type="submit" class="waves-effect waves-light btn-large">ADD CLASS</button>
        </div>
      </form>
    </div>

    <h5 class="sub-header">Select from your list of classes:</h5>
    <ul class="class-list">
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
  name: "InstructorProfile",
  data() {
    return {
      class_name: null
    };
  },
  methods: {
    saveClass: function() {
      const class_name = this.class_name;
      console.log(class_name);
    },
    displayListofClasses: function() {

    },
    editClassName: function() {

    },
    deleteClass: function() {

    }
  }
};
</script>

<style scoped>
.form-header,
.sub-header,
.class-list {
  text-align: center;
}
.class-list {
  margin-bottom: 5%;
}
.button {
  text-align: center;
}
</style>

