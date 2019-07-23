<template>
  <div>
    <StudentNameDisplay v-bind:student_array="student_array" />

    <h5>{Class Name} roster:</h5>

    <AddStudentDialog />

    <v-card class="display-card">
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="single_student in student_array"
          v-bind:key="single_student._id"
        >
          <h4 slot="header">{{single_student.preferred_name}}</h4>
          <h5
            v-bind:value="single_student.times_called"
          >Times called: {{single_student.times_called}}</h5>
          <hr />
          <div class="edit-form">
            <div>
              <template>
                <h6>Edit info for:</h6>
                <h6>{{single_student.preferred_name}}</h6>
              </template>

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
                <button
                  type="submit"
                  class="waves-effect waves-light btn-large red"
                  v-bind:id="single_student._id"
                  v-on:click="removeStudentFromClass"
                >DELETE</button>
              </form>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-card>

    <div>
      <router-link to="/:instructor_profile_id" class="waves-effect waves-light btn-large">BACK</router-link>
    </div>
  </div>
</template>

<script>
import API from "../utils/API";
import AddStudentDialog from "../components/Dialogs/AddStudentDialog";
import StudentNameDisplay from "../components/StudentNameDisplay/StudentNameDisplay";

export default {
  name: "ClassRoster",
  components: {
    AddStudentDialog,
    StudentNameDisplay
  },
  data() {
    return {
      student_array: [],
      times_called_to_increment: this.times_called,
      first_name_edit: this.first_name_edit,
      last_name_edit: this.last_name_edit,
      preferred_name_edit: this.preferred_name_edit
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
        })
        .catch(err => console.log(err));
    },

    editButtonToOpenDropdown: function() {
      console.log("click");
    }
  }
};
</script>

<style scoped>
.display-card {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}

.edit-form {
  width: 85%;
  margin: 1% auto;
}
</style>

