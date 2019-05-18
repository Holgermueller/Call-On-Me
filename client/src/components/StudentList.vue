<template>
  <div>
    <h5>list of students in class will go here</h5>
    <div class="row">
      <form @submit.prevent="addStudentToClass" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="student_name" placeholder="Student name" required>
          </div>
        </div>
        <router-link to="/" class="waves-effect waves-light btn-large">BACK</router-link>
        <button type="submit" class="waves-effect waves-light btn-large">SUBMIT</button>
      </form>
    </div>

    <router-link to="/editClass" class="waves-effect waves-light btn-large">Edit Roster</router-link>
  </div>
</template>

<script>
export default {
  name: "StudentList",
  data() {
    return {
      student_name: null
    };
  },
  methods: {
    addStudentToClass: function() {
      const studentName = this.student_name;
      console.log(studentName);
    }
  }
};
</script>

<style scoped>
</style>

