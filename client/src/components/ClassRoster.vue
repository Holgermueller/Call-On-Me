<template>
  <div>
    <h2>Student name will go here.</h2>
    <button>PICK A STUDENT</button>
    <h5>{Class Name} roster:</h5>
    <ul class="roster-display">
      <li
        v-for="(single_student, index) in student_array"
        v-bind:key="index"
      >{{single_student.preferred_name}}</li>
    </ul>
    <div class="row">
      <form @submit.prevent="addStudentToClass" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="student_name" placeholder="Student name" required />
          </div>
        </div>
        <router-link to="/:instructor_profile_id" class="waves-effect waves-light btn-large">BACK</router-link>
        <button type="submit" class="waves-effect waves-light btn-large">SUBMIT</button>
      </form>
    </div>
    <router-link to="/editClass" class="waves-effect waves-light btn-large">Edit Roster</router-link>
  </div>
</template>

<script>
import API from "../utils/API";
export default {
  name: "ClassRoster",
  data() {
    return {
      student_array: [],
      errors: [],
      student_name: null
    };
  },
  mounted() {
    API.getAllStudentsForClass()
      .then(res => {
        let student_array = res.data.roster.map(students => {
          this.student_array.push(students);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    addStudentToClass: function() {
      API.addStudentToClass({
        student_name: this.student_name
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    displayStudentsInClass: function() {},
    editStudentInfo: function() {},
    removeStudentFromClass: function() {}
  }
};
</script>

<style scoped>
</style>

