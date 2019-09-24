const Course = sequelize.define("course", {
  class_name: { type: Sequelize.STRING, allowNull: false },
  created_by: {
    type: Sequelize.INTEGER,
    references: {
      model: Instructor,
      key: "id"
    }
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  ]
});
