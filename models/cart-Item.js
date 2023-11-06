const Sequlize = require("sequelize");

const sequelize = require("../util/database");

const CartItem = sequelize.define("cartItem", {
  id: {
    type: Sequlize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  quantity: Sequlize.INTEGER,
});

module.exports = CartItem;
