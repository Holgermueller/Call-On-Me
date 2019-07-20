<template>
  <div>
    <div>
      <h2 class="name-display" id="nameDisplay"></h2>
    </div>

    <button v-on:click="chooseAStudent" type="submit">PICK A STUDENT</button>
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  name: "StudentNameDisplay",
  data() {
    return{}
  },
  props: {
    student_array: {
      type: Array,
      required: true
    }
  },
  methods: {
    chooseAStudent: function() {
      let studentArray = this.student_array;
      let randomStudent =
        studentArray[Math.floor(Math.random() * studentArray.length)];

      document.querySelector("#nameDisplay").innerHTML =
        randomStudent.preferred_name;

      let increment_id = randomStudent._id;
      let times_called = randomStudent.times_called;
      times_called++;
      let incrementObject = {
        times_called: times_called
      };

      API.editStudnetInfo(increment_id, incrementObject)
        .then(res => {
          // document.querySelector(increment_id).innerHTML =
          //   randomStudent.times_called;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.name-display {
  border: 2px solid black;
  border-radius: 15px;
}
</style>

