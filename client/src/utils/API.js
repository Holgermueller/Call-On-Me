import axios from "axios";

const API = {
  registerUser: function(newUser) {
    return axios.post("/api/comRoutes", newUser);
  },

  logUserIn: function() {

  },

  addClass: function() {

  },

  removeClass: function() {

  },

  addStudentToClass: function() {

  },

  editStudnetInfo: function() {

  },

  removeStudentFromClass: function() {

  }

}

export default API;
