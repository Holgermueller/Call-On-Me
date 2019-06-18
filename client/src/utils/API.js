import axios from "axios";

const API = {
  registerUser: function(new_user) {
    return axios.post("/instructorAPI/instructor/register", new_user);
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
