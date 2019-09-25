import axios from "axios";

const API = {
  registerUser: function(new_user) {
    return axios.post("/instructorapi/instructor/register", new_user);
  },

  logUserIn: function() {},

  removeUser: function() {},

  addClass: function(new_class) {
    return axios.post("/courseapi/course/", new_class);
  },

  getRosterForOneClass: function(id) {
    return axios.get("/courseapi/course/" + id);
  },

  getAllClasses: function() {
    return axios.get("/courseapi/course");
  },

  deleteClass: function(id) {
    return axios.delete("/courseapi/course/" + id);
  },

  getAllStudentsForClass: function() {
    return axios.get("/studentapi/student");
  },

  addStudentToClass: function(new_student) {
    return axios.post("/studentapi/student", new_student);
  },

  editStudnetInfo: function(id, updateObj) {
    return axios.put("/studentapi/student/" + id, updateObj);
  },

  removeStudentFromClass: function(id) {
    return axios.delete("/studentapi/student/" + id);
  }
};

export default API;
