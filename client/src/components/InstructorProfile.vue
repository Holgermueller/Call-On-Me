<template>
  <div class="profile-page">
    <h2 class="headline text-center font-weight-bold ma-5">Hello, Professor {name goes here}</h2>

    <v-card class="profile-actions">
      <AddClassDialog />
      <EditAccountDialog />
      <DeleteAccountDialog />
      <LogoutButton />
    </v-card>

    <h5 class="title text-center ma-5">Select from your list of classes:</h5>

    <v-expansion-panels class="class-display-panel">
      <v-expansion-panel
        v-for="single_class_info in class_info_array"
        v-bind:key="single_class_info._id"
        v-bind:id="single_class_info._id"
        v-bind:value="single_class_info._id"
      >
        <v-expansion-panel-header class="headline">{{single_class_info.class_name}}</v-expansion-panel-header>
        <v-expansion-panel-content class="single-class">
          <hr class="mb-1" />
          <v-btn @click="deleteClass" v-bind:id="single_class_info._id" color="red">
            <span class="mdi mdi-delete"></span>
            Delete Class
          </v-btn>

          <v-btn @click="toRosterPage" v-bind:id="single_class_info._id" color="blue">
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
      class_info_array: []
    };
  },

  created() {
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
    deleteClass() {
      let targetId = event.currentTarget.id;
      API.deleteClass(targetId)
        .then(res => {
          //this.$router.go();
        
          console.log(this.class_info_array);
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
