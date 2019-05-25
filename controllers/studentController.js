const Student = require("../models/studentsModel");
const mongoose = require("mongoose");

module.exports = {
  add_student: (req, res, next) => {
    const student = new Student({
      _id: new mongoose.Types.ObjectId(),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      preferred_name: req.body.preferred_name
    });
    student
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Student added!",
          createdStudent: result
        });
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  get_all_students: (req, res) => {
    Student.find({
      _id: req.params.id
    })
      .sort({ date: -1 })
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  find_student_by_id: (req, res) => {
    Student.findById(req.params.id)
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(422).json(err));
  },

  edit_student_info: (req, res) => {
    Student.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove_student: (req, res) => {
    Student.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
