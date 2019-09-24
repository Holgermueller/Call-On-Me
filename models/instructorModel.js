const Instructor = sequelize.define("instructor", {
  instructor_name: { type: Sequelize.STRING, allowNull: false },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: { type: Sequelize.STRING, allowNull: false },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class"
    }
  ]
});
