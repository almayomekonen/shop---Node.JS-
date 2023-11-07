const Sequlize = require("sequelize");

const sequelize = require("../util/database");

const OrderItem = sequelize.define("orderItem", {
  id: {
    type: Sequlize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  quantity: Sequlize.INTEGER,
});

module.exports = OrderItem;
