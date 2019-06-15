const Instructor = require("../models/instructorModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

module.exports = {
  register_user: (req, res) => {
    Instructor.find({ email: req.body.email })
      .exec()
      .then(instructor => {
        if (instructor.length >= 1) {
          return res.status(409).json({
            message: "Email already exists in database."
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              });
            } else {
              const instructor = new Instructor({
                _id: mongoose.Types.ObjectId(),
                instructor_name: req.body.instructor_name,
                email: req.body.email,
                password: hash,
                classes: req.body.classId
              });
              instructor
                .save()
                .then(result => {
                  res.status(201).json({
                    message: "Instructor added.",
                    createdInstructor: instructor
                  });
                })
                .catch(err => {
                  res.status(422).json(err);
                });
            }
          });
        }
      });
  },

  login_instructor: (req, res) => {
    Instructor.findOne({ email: req.body.email })
      .exec()
      .then(instructor => {
        if (instructor.length < 1) {
          return res.status(401).json({
            message: "Auth failed."
          });
        }
      })
      .catch(err => {
        res.status(422).json({
          err: err
        });
      });
  },

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
            res.status(422).json({
              err: err
            });
          });
      });
  }
};
