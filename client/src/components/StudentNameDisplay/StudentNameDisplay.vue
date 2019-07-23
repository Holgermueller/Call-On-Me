<template>
  <div>
    <v-card class="name-display-card">
      <div>
        <h2 class="name-display" id="nameDisplay"></h2>
      </div>

      <div class="button-div">
        <v-btn class="picker-button" @click="chooseAStudent" type="submit">PICK A STUDENT</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  name: "StudentNameDisplay",
  data() {
    return {};
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
.name-display-card {
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
}

.name-display {
  border: 5px ridge black;
  min-height: 125px;
  text-align: center;
  padding: 8%;
}

.button-div {
  margin: auto;
}
</style>

