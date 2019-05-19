const db = require("../models");

module.exports = {
  register_instructor: function(req, res) {
    db.Instructor.find({ email: req.body.email }).then(instructor => {
      if (instructor.length >= 1) {
        return res.status(409).json({
          message: "Email exists."
        });
      } else {
        db.Instructor.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
    });
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
