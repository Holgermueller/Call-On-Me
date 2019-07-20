<template>
  <div class="edit-form" v-bind:key="single_student._id" v-bind:id="single_student._id">
    <div>
      <h6>Edit info for:</h6>
      <h6>{{single_student.preferred_name}}</h6>
      <hr />
      <EditStudentInfoForm v-bind:student_array="student_array" />
      <form action>
        <input type="text" v-bind:placeholder="single_student.first_name" v-model="first_name_edit" />
        <input type="text" v-bind:placeholder="single_student.last_name" v-model="last_name_edit" />
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
</template>

<script>
import API from "../../utils/API";
export default {
  name: "EditStudentInfoForm",
  mounted() {},
  data: function() {
    return {};
  },
  props: {
    student_array: {
      type: Array,
      required: true
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>


