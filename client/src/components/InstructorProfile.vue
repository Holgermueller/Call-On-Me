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
              placeholder="Ex.: Multicultural Lit T-Th 9-9:50"
            />
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
    <form @submit.prevent="toRosterPage" class="col s12">
      <button type="submit" class="waves-effect waves-light btn-large">to roster page</button>
    </form>
  </div>
</template>

<script>
import API from "../utils/API";
export default {
  name: "InstructorProfile",
  data() {
    return {
      listOfClasses: [],
      errors: [],
      class_name: null
    };
  },
  mounted() {
    API.getAllClasses()
      .then(response => {
        let listOfClasses = response.data;
        console.log("listOfClasses");
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    saveClass: function() {
      API.addClass({
        class_name: this.class_name
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    editClassName: function() {},
    deleteClass: function() {},
    toRosterPage: function() {
      console.log("click");
      this.$router.push("/:class_roster_id");
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

