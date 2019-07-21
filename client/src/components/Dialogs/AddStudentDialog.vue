<template>
  <div>
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
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  name: "AddStudentDialog",
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".modal");
      const instances = M.Modal.init(elems);
    });
  },
  data() {
    return {
      errors: [],
      first_name: null,
      last_name: null,
      preferred_name: null
    };
  },
  methods: {
    addStudentToClass: function() {
      API.addStudentToClass({
        first_name: this.first_name,
        last_name: this.last_name,
        preferred_name: this.preferred_name
      })
        .then(res => {
          this.$router.go();
        })
        .catch(err => {
          console.log(err);
        });
    },

    closeModal: function() {
      console.log("click");
    }
  }
};
</script>

<style scoped>
</style>


