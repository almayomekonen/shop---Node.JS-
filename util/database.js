const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "alamayomekonen", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
