<template>
  <div data-app>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{on}">
        <v-btn block color="green" dark v-on="on">
          <span class="mdi mdi-pen-plus"></span>
          Add A Class
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline blue">
          <span class="headline mdi mdi-account-group">Add a class:</span>
        </v-card-title>

        <div class="errors" v-if="errors.length">
          <b>Please fix the following error(s):</b>
          <ul class="error-list">
            <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
          </ul>
        </div>

        <v-card-text my="12">
          <v-text-field
            prepend-icon="mdi-account-group"
            type="text"
            v-model="class_name"
            label="Enter class name here*"
            hint="Ex.: Multicultural Lit T-Th 9-9:50"
            persistent-hint
            append-icon="mdi-close"
            ref="textField"
            @click:append="clearField"
          ></v-text-field>

          <small m="12 auto">* Indicates required field.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red " @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue " @click="saveClass">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import API from "../../utils/API";
import { bus } from "../../main";

export default {
  data() {
    return {
      dialog: false,
      errors: [],
      class_name: null
    };
  },

  props: {
    classesArray: {
      type: Array,
      required: true
    }
  },

  methods: {
    saveClass() {
      API.addClass({
        class_name: this.class_name
      })
        .then(res => {
          //this.sendDataToClassesArray();
          this.updateClassesArray();
          let class_name = res.data.createdClass.class_name;
          this.dialog = false;
          this.clearField();
        })
        .catch(err => {
          console.log(err);
        });
    },

    // sendDataToClassesArray() {
    //   let classData = {
    //     class_name: this.class_name
    //   };

    //   bus.$emit("sendClassData", classData);
    // },

    updateClassesArray() {
      let classesArray = this.classesArray;

      classesArray.length = 0;

      API.getAllClasses()
        .then(res => {
          let classesArray = res.data.class_list.map(classInfo => {
            this.classesArray.push(classInfo);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },

    clearField() {
      this.$refs.textField.reset();
    }
  }
};
</script>

<style scoped>
</style>
