<template>
  <div>
    <h2>Hello, Professor {name goes here}</h2>

    <div class="profile-actions">
      <AddClassDialog />

      <v-btn @click="editAccount">Edit Account</v-btn>
      <v-btn @click="deleteAccount">Delete Account</v-btn>
      <v-btn @click="logout">Log Out</v-btn>
    </div>

    <h5 class="sub-header">Select from your list of classes:</h5>

    <v-expansion-panels class="class-list">
      <v-expansion-panel
        v-for="single_class_info in class_info_array"
        v-bind:key="single_class_info._id"
        v-bind:id="single_class_info._id"
        v-bind:value="single_class_info._id"
      >
        <v-expansion-panel-header>{{single_class_info.class_name}}</v-expansion-panel-header>
        <v-expansion-panel-content class="single-class">
          <hr />
          <v-btn
            @click="toRosterPage"
            v-bind:id="single_class_info._id"
            color="blue darken-1"
          >Go To Roster</v-btn>
          <v-btn
            @click="deleteClass"
            v-bind:id="single_class_info._id"
            color="red darken-1"
          >Delete Class</v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import API from "../utils/API";
import AddClassDialog from "../components/Dialogs/AddClassDialog";

export default {
  name: "InstructorProfile",
  components: {
    AddClassDialog
  },
  data() {
    return {
      class_info_array: [],
      inset: true
    };
  },
  mounted() {
    API.getAllClasses()
      .then(res => {
        let class_info_array = res.data.class_list.map(class_info => {
          this.class_info_array.push(class_info);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    deleteClass: function() {
      let targetId = event.target.id;
      API.deleteClass(targetId)
        .then(res => {
          this.$router.go();
          console.log(res.data);
        })
        .catch(err => console.log(err));
    },
    toRosterPage: function() {
      let targetId = event.target.id;
      this.$router.push("/class_roster/:id");
    },
    deleteAccount: function() {
      console.log("click");
    },
    editAccount: function() {
      console.log("click");
    },
    logout: function() {
      console.log("click");
    }
  }
};
</script>

<style scoped>
.sub-header {
  text-align: center;
}
hr {
  margin-bottom: 1%;
}
.class-list {
  max-width: 85%;
  margin: 2% auto;
  height: 25%;
}
</style>
