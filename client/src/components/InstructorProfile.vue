<template>
  <div class="profile-page">
    <h2 class="headline text-center font-weight-bold ma-5">Hello, Professor {name goes here}</h2>

    <v-card class="profile-actions">
      <AddClassDialog v-bind:classesArray="classesArray" />
      <EditAccountDialog />
      <DeleteAccountDialog />
      <LogoutButton />
    </v-card>

    <h5 class="title text-center ma-5">Select from your list of classes:</h5>

    <v-expansion-panels class="class-display-panel">
      <v-expansion-panel
        v-for="(singleClass, index) in classesArray"
        v-bind:key="singleClass._id"
        v-bind:id="singleClass._id"
        v-bind:value="singleClass._id"
        v-bind:classesArray="classesArray"
      >
        <v-expansion-panel-header class="headline">{{singleClass.class_name}}</v-expansion-panel-header>
        <v-expansion-panel-content class="single-class">
          <hr class="mb-1" />
          <v-btn
            @click="deleteClassAndRemoveFromDOM(index)"
            v-bind:id="singleClass._id"
            color="red"
          >
            <span class="mdi mdi-delete"></span>
            Delete Class
          </v-btn>

          <v-btn @click="toRosterPage" v-bind:id="singleClass._id" color="blue">
            Go To Roster
            <span class="mdi mdi-arrow-right-bold"></span>
          </v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import API from "../utils/API";
import AddClassDialog from "../components/Dialogs/AddClassDialog";
import EditAccountDialog from "../components/Dialogs/EditAccount";
import DeleteAccountDialog from "../components/Dialogs/DeleteAccount";
import LogoutButton from "../components/Buttons/Logout";
import { bus } from "../main";

export default {
  name: "InstructorProfile",
  components: {
    AddClassDialog,
    EditAccountDialog,
    DeleteAccountDialog,
    LogoutButton
  },

  data() {
    return {
      classesArray: []
    };
  },

  created() {
    bus.$on("sendClassData", value => {
      console.log(value);
      this.classesArray.push(value);
    });

    API.getAllClasses()
      .then(res => {
        let classesArray = res.data.class_list.map(classInfo => {
          this.classesArray.push(classInfo);
        });
        console.log(res.data._id);
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    deleteClassAndRemoveFromDOM(index) {
      this.classesArray.splice(index, 1);

      let targetId = event.currentTarget.id;
      API.deleteClass(targetId)
        .then(res => {
          console.log(this.classesArray);
        })
        .catch(err => console.log(err));
    },

    toRosterPage() {
      let targetId = event.target.id;
      this.$router.push("/class_roster/:id");
    }
  }
};
</script>

<style scoped>
.profile-page {
  margin-bottom: 15%;
}
.profile-actions {
  margin: 2% auto;
  border: 3% solid black;
  width: 75%;
}
.class-display-panel {
  width: 85%;
  margin: 1% auto;
}
</style>
