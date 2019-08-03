<template>
  <div class="mb-9">
    <StudentNameDisplay v-bind:student_array="student_array" />

    <h5 class="title text-center ma-5">{Class Name} roster:</h5>

    <div class="ma-5">
      <AddStudentDialog />
      <router-link to="/:instructor_profile_id" color="blue darken-1">BACK</router-link>
      <LogoutButton />
    </div>

    <v-expansion-panels class="mb-9">
      <v-expansion-panel v-for="single_student in student_array" v-bind:key="single_student._id">
        <v-expansion-panel-header>{{single_student.preferred_name}}</v-expansion-panel-header>
        <v-expansion-panel-content>
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

              <form v-bind:id="single_student._id">
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
                <v-btn
                  color="green darken-1"
                  v-bind:id="single_student._id"
                  @click="editStudentInfoSubmit"
                >SUBMIT</v-btn>

                <v-btn
                  type="submit"
                  color="red darken-1"
                  v-bind:id="single_student._id"
                  @click="removeStudentFromClass"
                >DELETE</v-btn>
              </form>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import API from "../utils/API";
import AddStudentDialog from "../components/Dialogs/AddStudentDialog";
import StudentNameDisplay from "../components/StudentNameDisplay/StudentNameDisplay";
import LogoutButton from "../components/Buttons/Logout";

export default {
  name: "ClassRoster",
  components: {
    AddStudentDialog,
    StudentNameDisplay,
    LogoutButton
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

    removeStudentFromClass: function(e) {
      e.preventDefault();
      let targetId = event.target.id;
      console.log(targetId);
      API.removeStudentFromClass(targetId)
        .then(res => {
          this.$router.go();
        })
        .catch(err => {
          console.log(err);
        });
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

