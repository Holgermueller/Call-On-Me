const Class = require("../models/classesModel");
const mongoose = require("mongoose");

module.exports = {
  add_class: (req, res) => {
    const newClass = new Class({
      _id: mongoose.Types.ObjectId(),
      class_name: req.body.class_name,
      students: [req.body.studentId],
      created_by: created_by
    });
    newClass
      .save()
      .then(result => {
        res.status(201).json({
          message: "Class added!",
          createdClass: {
            class_name: req.body.class_name,
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

  get_all_classes: (req, res) => {
    Class.find()
      .then(dbModel => {
        res.status(200).json({
          message: "Class list retrieved.",
          count: dbModel.length,
          class_list: dbModel
        });
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  get_one_class: (req, res) => {
    Class.findById(req.params.classId)
      .then(dbModel => {
        if (!dbModel) {
          return res.status(404).json({
            message: "Class not found"
          });
        }
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  remove_class: (req, res) => {
    Class.findById({ _id: req.params.classId })
      .then(dbModel => dbModel.remove())
      .then(dbModel => {
        res.status(200).json({
          message: "Class deleted."
        });
      })
      .catch(err => res.status(422).json(err));
  }
};
