<template>
  <div>
    <v-card class="name-display-card elevation-24">
      <h2 class="name-display headline elevation-2" id="nameDisplay"></h2>

      <div class="button-div">
        <v-btn
          block
          color="amber"
          class="my-5 mx-auto select-button"
          @click="chooseAStudent"
          type="button"
        >PICK A STUDENT</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import API from "../../utils/API";

export default {
  name: "StudentNameDisplay",
  data() {
    return {
      calledArray: []
    };
  },
  props: {
    student_array: {
      type: Array,
      required: true
    }
  },
  methods: {
    chooseAStudent() {
      let studentArray = this.student_array;
      let randomStudent =
        studentArray[Math.floor(Math.random() * studentArray.length)];
      let calledArray = this.calledArray;

      if (calledArray.length === studentArray.length) {
        this.calledArray = [];
        this.chooseAStudent();
      } else if (this.calledArray.includes(randomStudent.preferred_name)) {
        this.chooseAStudent();
      } else {
        console.log(randomStudent.preferred_name);
        console.log(calledArray);

        this.calledArray.push(randomStudent.preferred_name);

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

.select-button {
  border: 3px solid #ffcd00;
}
</style>

