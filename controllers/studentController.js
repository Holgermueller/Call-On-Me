const Student = require("../models/studentsModel");
const Class = require("../models/courseModel");

module.exports = {
  get_all_students: (req, res) => {
    Student.find({ _classId: req.params.studentId })
      .sort({ date: -1 })
      .then(dbModel => {
        res.status(200).json({
          message: "Student list retrieved.",
          count: dbModel.length,
          roster: dbModel
        });
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  add_student: (req, res) => {
    const student = new Student({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      preferred_name: req.body.preferred_name
    });
    student
      .save()
      .then(result => {
        Class.findOneAndUpdate(
          { _id: req.params.classId },
          { $push: { students: result._id } },
          { upsert: true }
        );
        res.status(201).json({
          message: "Student added!",
          createdStudent: {
            _id: result.id,
            first_name: result.first_name,
            last_name: result.last_name,
            preferred_name: result.preferred_name
          }
        });
      })
      .catch(err => {
        res.status(422).json({
          error: err
        });
      });
  },

  find_student_by_id: (req, res) => {
    Student.findById({ _id: req.params.studentId })
      .then(doc => {
        if (!doc) {
          return res.status(404).json({
            message: "Student not found"
          });
        }
        res.status(200).json(doc);
      })
      .catch(err => res.status(422).json(err));
  },

  edit_student_info: (req, res) => {
    Student.findOneAndUpdate({ _id: req.params.studentId }, req.body, {
      upsert: true
    })
      .then(result => {
        res.status(200).json({
          message: "Student info updated.",
          updatedStudent: {
            _id: result.id,
            first_name: result.first_name,
            last_name: result.last_name,
            preferred_name: result.preferred_name,
            times_called: result.times_called
          }
        });
      })
      .catch(err => {
        res.status(422).json({ err: err });
      });
  },

  remove_student: (req, res) => {
    Student.findById({ _id: req.params.studentId })
      .then(dbModel => dbModel.remove())
      .then(dbModel => {
        res.status(200).json({
          message: "Student deleted."
        });
      })
      .catch(err => res.status(422).json({ err: err }));
  }
};
