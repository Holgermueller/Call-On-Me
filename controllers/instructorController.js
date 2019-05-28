const Instructor = require("../models/instructorModel");
const mongoose = require("mongoose");

module.exports = {
  register_user: (req, res) => {
    const instructor = new Instructor({
      _id: mongoose.Types.ObjectId(),
      instructor_name: req.body.instructor_name,
      email: req.body.email,
      password: req.body.password
    });
    instructor
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "User added!",
          createdInstructor: instructor
        });
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  // login_instructor: (req, res) => {},

  delete_account: (req, res) => {
    Instructor.remove({
      _id: req.params.instructorId
    })
      .exec()
      .then(result => {
        res
          .status(200)
          .json({
            message: "Instructor deleted."
          })
          .catch(err => {
            console.log(err);
            res.status(422).json({
              err: err
            });
          });
      });
  }
};
