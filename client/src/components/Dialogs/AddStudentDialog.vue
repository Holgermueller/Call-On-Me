<template>
  <div data-app>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on}">
        <v-btn block color="green" dark v-on="on">
          <span class="mdi mdi-account-plus"></span> ADD A STUDENT
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline blue">
          <span class="headline mdi mdi-account-plus">Add a Student to {{className}}:</span>
        </v-card-title>

        <v-card-text>
          <div class="errors" v-if="errors.length">
            <b>Please fix the following error(s):</b>
            <ul class="error-list">
              <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
            </ul>
          </div>

          <v-container fluid>
            <v-layout wrap>
              <v-form ref="form">
                <v-flex xs12 sm6 md24>
                  <v-text-field v-model="first_name" label="First name*"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md24>
                  <v-text-field v-model="last_name" label="Family name*"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md24>
                  <v-text-field v-model="preferred_name" label="Preferred name*"></v-text-field>
                </v-flex>
              </v-form>
            </v-layout>
          </v-container>

          <small>* Indicates required field.</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="clearField">Clear Form</v-btn>
          <v-btn color="red darken-1" @click="dialog = false">CANCEL</v-btn>
          <v-btn color="blue darken-1" @click="addStudentToClass">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import API from "../../utils/API";
import { bus } from "../../main";

export default {
  name: "AddStudentDialog",
  created() {},
  data() {
    return {
      errors: [],
      first_name: null,
      last_name: null,
      preferred_name: null,
      dialog: false,
      times_called: 0
    };
  },

  props: {
    student_array: {
      type: Array,
      required: true
    },
    classId: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    }
  },

  methods: {
    addStudentToClass() {
      API.addStudentToClass({
        first_name: this.first_name,
        last_name: this.last_name,
        preferred_name: this.preferred_name,
        times_called: this.times_called,
        classId: this.classId
      })
        .then(res => {
          //this.sendDataToStudentArray();
          this.updateStudentArray();
          this.dialog = false;
          this.clearField();
        })
        .catch(err => {
          console.log(err);
        });
    },

    clearField() {
      this.$refs.form.reset();
    },

    getClassId() {
      console.log(this.classId);
    },

    // sendDataToStudentArray() {
    //   const studentData = {
    //     first_name: this.first_name,
    //     last_name: this.last_name,
    //     preferred_name: this.preferred_name,
    //     times_called: 0
    //   };

    //   bus.$emit("sendStudent", studentData);
    // },

    updateStudentArray() {
      let student_array = this.student_array;

      student_array.length = 0;

      API.getAllStudentsForClass()
        .then(res => {
          let student_array = res.data.roster.map(students => {
            this.student_array.push(students);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>


