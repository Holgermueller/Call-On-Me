const db = require("../models/instructorModel");

module.exports = {
  register_user: function(req, res) {
    db.Instructor.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  login_instructor: (req, res) => {},

  create_class: (req, res) => {},

  delete_class: (req, res) => {},

  add_student_to_class: (req, res) => {},

  edit_student: (req, res) => {},

  remove_student: (req, res) => {},

  get_all_students: (req, res) => {},

  delete_student: (req, res) => {},

  delete_account: (req, res) => {}
};
