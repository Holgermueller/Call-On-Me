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
      <li
        v-for="(one_class, index) in listOfClasses"
        v-bind:key="index"
        class="class-name-list-item"
      >
        <a href>
          <p>{{one_class}}</p>
        </a>
        <button class="delete-button" v-on:click="deleteClass">X</button>
        <hr />
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
        let listOfClasses = response.data.class_list.map(list => {
          this.listOfClasses.push(list.class_name);
        });
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
          this.$router.go();
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteClass: function(id) {
      console.log(id);
      API.removeClass(id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    },
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
.class-name-list-item {
  padding: 4px;
  width: 25%;
}
.edit-button,
.delete-button {
  border-radius: 15%;
  padding: 4px;
}
</style>

