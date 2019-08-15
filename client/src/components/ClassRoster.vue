<template>
  <div class="roster-page">
    <StudentNameDisplay v-bind:student_array="student_array" />

    <h5 class="title text-center ma-5">{Class Name} roster:</h5>

    <v-card class="ma-5 elevation-0">
      <AddStudentDialog v-bind:student_array="student_array" />
      <router-link class="router-link" to="/:instructor_profile_id">
        <v-btn block color="blue" link h-ref="/:instructor_profile_id">
          <span class="mdi mdi-arrow-left-bold"></span>
          BACK
        </v-btn>
      </router-link>
      <LogoutButton />
    </v-card>

    <v-expansion-panels class="roster-display-panel">
      <v-expansion-panel
        v-for="(single_student, index) in student_array"
        v-bind:key="single_student._id"
        v-bind:id="single_student.id"
        v-bind:value="single_student.id"
      >
        <v-expansion-panel-header class="headline">{{single_student.preferred_name}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <h5
            v-bind:value="single_student.times_called"
            class="body-1"
          >Times called: {{single_student.times_called}}</h5>
          <hr />

          <div class="edit-form">
            <div>
              <template color="grey">
                <h6 class="body-1">Edit info for:</h6>
                <h6 class="body-1">{{single_student.preferred_name}}</h6>
              </template>

              <v-form v-bind:id="single_student._id">
                <v-text-field
                  type="text"
                  label="First name"
                  v-bind:placeholder="single_student.first_name"
                  v-model="first_name_edit"
                ></v-text-field>
                <v-text-field
                  type="text"
                  v-bind:placeholder="single_student.last_name"
                  v-model="last_name_edit"
                ></v-text-field>
                <v-text-field
                  type="text"
                  v-bind:placeholder="single_student.preferred_name"
                  v-model="preferred_name_edit"
                ></v-text-field>
                <br />
                <div>
                  <v-btn
                    color="green darken-1"
                    v-bind:id="single_student._id"
                    @click="editStudentInfoSubmit"
                  >SUBMIT</v-btn>

                  <v-btn
                    color="red darken-1"
                    v-bind:id="single_student._id"
                    @click="removeStudentFromClass(index)"
                  >DELETE</v-btn>
                </div>
              </v-form>
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
import { bus } from "../main";

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
      first_name_edit: this.first_name_edit,
      last_name_edit: this.last_name_edit,
      preferred_name_edit: this.preferred_name_edit
    };
  },

  created() {
    bus.$on("sendStudent", value => {
      this.student_array.push(value);
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

  mounted() {},

  methods: {
    editStudentInfoSubmit(e) {
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

    removeStudentFromClass(index) {
      this.student_array.splice(index, 1);

      let targetId = event.currentTarget.id;
      API.removeStudentFromClass(targetId)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    updateTimesCalledForDisplay() {}
  }
};
</script>

<style scoped>
.roster-page {
  margin-bottom: 15%;
}

.roster-display-panel {
  width: 85%;
  margin: 0 auto;
}

.display-card {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}

.edit-form {
  width: 85%;
  margin: 1% auto;
}

.router-link {
  text-decoration: none;
}
</style>

