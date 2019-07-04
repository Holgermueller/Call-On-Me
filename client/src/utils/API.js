import axios from "axios";

const API = {
  registerUser: function(new_user) {
    return axios.post("/instructorapi/instructor/register", new_user);
  },

  logUserIn: function() {},

  removeUser: function() {},

  addClass: function(new_class) {
    return axios.post("/classapi/class/", new_class);
  },

  getAllClasses: function() {
    return axios.get("/classapi/class");
  },

  removeClass: function(id) {
    console.log(id)
    return axios.delete("/classapi/class/");
  },

  addStudentToClass: function() {},

  editStudnetInfo: function() {},

  removeStudentFromClass: function() {}
};

export default API;
