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

  deleteClass: function(id) {
    return axios.delete("/classapi/class/" + id);
  },

  getAllStudentsForClass: function() {
    return axios.get("/studentapi/student");
  },

  addStudentToClass: function() {},

  editStudnetInfo: function() {},

  removeStudentFromClass: function() {}
};

export default API;
