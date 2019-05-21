const Instructor = require("../models/instructorModel");

module.exports = {
  register_user: (req, res) => {
    const instructor = new Instructor({
      instructor_name: req.body.instructor_name,
      email: req.body.email,
      password: req.body.password
    });
    instructor
      .save(req.body)
      .then(result => {
        res.status(200).json({
          message: "User added!"
        });
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  // login_instructor: (req, res) => {},

  delete_account: (req, res) => {
    Instructor.remove({
      _id: req.params.id
    }).then(result => {
      res
        .status(200)
        .json(result)
        .catch(err => {
          res.status(422).json(err);
        });
    });
  }
};
