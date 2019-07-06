<template>
  <div>
    <h2>Hello, Professor {name goes here}</h2>
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
        v-for="(single_class_info, index) in class_info_array"
        v-bind:key="index"
        v-bind:id="single_class_info._id"
        v-bind:value="single_class_info._id"
        class="card class-name-list-item"
      >
        <h6>{{single_class_info.class_name}}</h6>
        <hr />
        <div class="button-div">
          <button class="btn waves-effect waves-light btn-large" type="submit">Go to roster</button>
          <button
            class="waves-effect waves-light btn-large red"
            v-on:click="deleteClass"
          >DELETE CLASS</button>
        </div>
      </li>
    </ul>
    <div class="col s12 profile-buttons">
      <button class="waves-effect waves-light btn-large">Edit Account</button>
      <button class="waves-effect waves-light btn-large red">Delete Account</button>
    </div>
  </div>
</template>

<script>
import API from "../utils/API";
export default {
  name: "InstructorProfile",
  data() {
    return {
      class_info_array: [],
      errors: [],
      class_name: null
    };
  },
  mounted() {
    API.getAllClasses()
      .then(res => {
        let class_info_array = res.data.class_list.map(class_info => {
          this.class_info_array.push(class_info);
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
    deleteClass: function() {
      let targetId = event.path[1].id;
      API.deleteClass(targetId)
        .then(res => {
          this.$router.go();
          console.log(res.data);
        })
        .catch(err => console.log(err));
    },
    toRosterPage: function() {
      console.log("click");
      this.$router.go("/:class_roster_id");
    }
  }
};
</script>

<style scoped>
.form-header,
.sub-header {
  text-align: center;
}
.class-list {
  margin-bottom: 5%;
}
.button {
  text-align: center;
}
.class-name-list-item {
  margin: 2%;
  padding: 4px;
  height: 25%;
}
hr {
  margin-bottom: 1%;
}
.profile-buttons {
  margin: 4% 0%;
  text-align: center;
}
</style>

