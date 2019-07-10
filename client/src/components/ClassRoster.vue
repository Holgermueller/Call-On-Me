<template>
  <div>
    <div>
      <h2 class="name-display" id="nameDisplay"></h2>
    </div>
    <button v-on:click="chooseAStudent" type="submit">PICK A STUDENT</button>
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
            <input type="text" v-model="first_name" placeholder="First name" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="last_name" placeholder="Last name" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="preferred_name" placeholder="Preferred name" required />
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
      first_name: null,
      last_name: null,
      preferred_name: null,
      times_called: null
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
        first_name: this.first_name,
        last_name: this.last_name,
        preferred_name: this.preferred_name
      })
        .then(res => {
          console.log(res.data);
          this.$router.go();
        })
        .catch(err => {
          console.log(err);
        });
    },
    chooseAStudent: function() {
      let studentArray = this.student_array;

      let randomStudent =
        studentArray[Math.floor(Math.random() * studentArray.length)];
      
      document.querySelector("#nameDisplay").innerHTML =
        randomStudent.preferred_name;
      
      let randomStudentId = randomStudent._id;

      API.editStudnetInfo(randomStudentId, this.times_called)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    incrementCalledOn: function() {
      let times_called = times_called++;
    },
    editStudentInfo: function() {
      console.log("click");
    },
    removeStudentFromClass: function() {
      console.log("click");
    }
  }
};
</script>

<style scoped>
.name-display {
  border: 2px solid black;
  border-radius: 15px;
}
</style>

