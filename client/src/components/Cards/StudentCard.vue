<template>

    <li
      
    >
      <h4>{{single_student.preferred_name}}</h4>
      <h5 v-bind:value="single_student.times_called">Times called: {{single_student.times_called}}</h5>
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

</template>

<script>
import API from "../../utils/API"
export default {
  name: "StudentInfoDisplayCard",
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
  data: function() {
        return {
      student_array: [],
      times_called_to_increment: this.times_called,
      first_name_edit: this.first_name_edit,
      last_name_edit: this.last_name_edit,
      preferred_name_edit: this.preferred_name_edit
    };
  },
  props: {
    students: Array
  },
  methods: {}
};
</script>

<style scoped>
</style>


