<template>
  <div>
    <!-- <div class="edit-form" v-bind:key="single_student._id" v-bind:id="single_student._id"> -->
    <div v-for="single_student in student_array" v-bind:key="single_student._id">
      <h6>{{single_student.preferred_name}}</h6>
    </div>
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  name: "EditStudentInfoForm",
  created() {},
  data: function() {
    return {};
  },
  props: {
    student_array: {
      type: Array,
      required: true
    }
  },
  template: "<p>{{preferred_name}}</p>",
  methods: {}
};
</script>

<style scoped>
</style>


