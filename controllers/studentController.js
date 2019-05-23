const Student = require("../models/studentsModel");

module.exports = {
  add_student: (req, res) => {
    const student = new Student({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      preferredName: req.body.preferredName,
      class: req.body.class,
      instructor: req.body.instructor,
      timesCalledOn: req.body.timesCalledOn
    });
    student
      .save(req.body)
      .then(result => {
        res.status(201).json({
          message: "Student added!",
          createdStudent: student
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
      .then(dbModel => res.status(200).json(dbModel))
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
