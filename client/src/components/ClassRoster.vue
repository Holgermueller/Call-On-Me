<template>
  <div>
    <div>
      <h2 class="name-display" id="nameDisplay"></h2>
    </div>

    <button v-on:click="chooseAStudent" type="submit">PICK A STUDENT</button>

    <h5>{Class Name} roster:</h5>

    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Add a Student</a>

    <div id="modal1" class="modal">
      <div class="modal-header">
        <h3>Add a Student:</h3>
      </div>
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

          <div class="modal-footer">
            <button v-on:click="closeModal" class="waves-effect waves-light btn-large red">CANCEL</button>
            <button type="submit" class="waves-effect waves-light btn-large">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>

    <ul class="roster-display">
      <li
        v-for="(single_student, index) in student_array"
        v-bind:key="index"
        class="card"
        v-bind:id="single_student._id"
      >
        <h4>{{single_student.preferred_name}}</h4>
        <h5>Times called: {{single_student.times_called}}</h5>
        <hr />

        <div class="edit-form">
          <div>
            <h6>Edit info for:</h6>
            <h6>{{single_student.preferred_name}}</h6>
            <hr />
            <form action>
              <input
                type="text"
                v-bind:placeholder="single_student.first_name"
                v-model="first_name_edit"
              />
              <input
                type="text"
                v-bind:placeholder="single_student.last_name"
                v-model="last_name_edit"
              />
              <input
                type="text"
                v-bind:placeholder="single_student.preferred_name"
                v-model="preferred_name_edit"
              />
              <button class="modal-close waves-effect waves-light waves-red btn red">CANCEL</button>
              <button
                class="waves-effect waves-light waves-green btn"
                v-bind:id="single_student._id"
                v-on:click="editStudentInfoSubmit"
              >SUBMIT</button>
            </form>
          </div>
        </div>

        <hr />
        <button
          v-bind:id="single_student._id"
          class="waves-effect waves-light btn-large"
          v-on:click="editButtonToOpenDropdown"
        >EDIT</button>

        <button
          type="submit"
          class="waves-effect waves-light btn-large red"
          v-bind:id="single_student._id"
          v-on:click="removeStudentFromClass"
        >DELETE</button>
      </li>
    </ul>

    <div>
      <router-link to="/:instructor_profile_id" class="waves-effect waves-light btn-large">BACK</router-link>
    </div>
  </div>
</template>

<script>
import API from "../utils/API";

export default {
  name: "ClassRoster",
  components: {},
  data() {
    return {
      student_array: [],
      errors: [],
      first_name: null,
      last_name: null,
      preferred_name: null,
      times_called: null,
      first_name_edit: this.first_name_edit,
      last_name_edit: this.last_name_edit,
      preferred_name_edit: this.preferred_name_edit
    };
  },

  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".modal");
      const instances = M.Modal.init(elems);
    });

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

    editStudentInfoSubmit: function(e) {
      e.preventDefault();

      let targetId = event.target.id;

      let updatedStudentInfoObj = {
        first_name: this.first_name_edit,
        last_name: this.last_name_edit,
        preferred_name: this.preferred_name_edit
      };

      API.editStudnetInfo(targetId, updatedStudentInfoObj)
        .then(res => {
          console.log(res.data);
          this.$router.go();
        })
        .catch(err => {
          console.log(err);
        });
    },

    removeStudentFromClass: function() {
      let targetId = event.target.id;
      API.removeStudentFromClass(targetId)
        .then(res => {
          this.$router.go();
          console.log(res.data);
        })
        .catch(err => console.log(err));
    },

    editButtonToOpenDropdown: function() {
      console.log("click");
    },

    closeModal:function() {
      console.log('click');
    }
  }
};
</script>

<style scoped>
.name-display {
  border: 2px solid black;
  border-radius: 15px;
}

.edit-form {
  width: 85%;
  margin: 1% auto;
}
</style>

