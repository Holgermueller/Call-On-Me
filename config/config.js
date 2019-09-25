const Sequelize = require("sequelize");

module.exports = new Sequelize('call_on_me', 'root', 'Kafka#678', {
  host: 'localhost',
  dialect: 'mysql',
  operatorAliases: false
});
