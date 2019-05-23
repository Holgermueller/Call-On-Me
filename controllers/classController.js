const Class = require("../models/classesModel");

module.exports = {
  add_class: (req, res) => {
    const newClass = new Class({});
    newClass
      .save(req.body)
      .then(result => {
        res.status(201).json({
          message: "Class added!",
          createdClass: newClass
        });
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  get_all_classes: (req, res) => {
    Class.find({
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

  get_one_class: (req, res) => {
    Class.findById(req.params.id)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove_class: (req, res) => {
    Class.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
