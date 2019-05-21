const db = require("../models");
const mongoose = require("mongoose");
const Instructor = require("../models/instructorModel");

module.exports = {
  register_user: (req, res) => {
    const instructor = new Instructor({
      instructor_name: req.body.instructor_name,
      email: req.body.email,
      password: req.body.password
    });
    instructor.save(req.body)
      .then(result => {
        res.status(200).json({
          message: "User added!"
        });
      })
      .catch(err => {
        res.status(422).json({
          error: err
        });
      });
  }

  // login_instructor: (req, res) => {},

  // create_class: (req, res) => {},

  // delete_class: (req, res) => {},

  // add_student_to_class: (req, res) => {},

  // edit_student: (req, res) => {},

  // remove_student: (req, res) => {},

  // get_all_students: (req, res) => {},

  // delete_student: (req, res) => {},

  // delete_account: (req, res) => {}
};
