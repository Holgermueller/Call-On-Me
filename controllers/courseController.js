const Course = require("../models/courseModel");

module.exports = {
  add_course: (req, res) => {
    const newCourse = new Course({
      course_name: req.body.course_name,
      students: [req.body.studentId],
      created_by: created_by
    });
    newCourse
      .save()
      .then(result => {
        res.status(201).json({
          message: "Course added!",
          createdCourse: {
            course_name: req.body.course_name,
            created_by: req.body.created_by
          }
        });
      })
      .catch(err => {
        res.status(422).json({
          error: err
        });
      });
  },

  get_all_courses: (req, res) => {
    Course.findAll()
      .then(dbModel => {
        res.status(200).json({
          message: "Course list retrieved.",
          count: dbModel.length,
          Course_list: dbModel
        });
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  get_one_course: (req, res) => {
    Course.findById(req.params.classId)
      .then(dbModel => {
        if (!dbModel) {
          return res.status(404).json({
            message: "Course not found"
          });
        }
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  remove_course: (req, res) => {
    Course.findById({ _id: req.params.classId })
      .then(dbModel => dbModel.remove())
      .then(dbModel => {
        res.status(200).json({
          message: "Course deleted."
        });
      })
      .catch(err => res.status(422).json(err));
  }
};
