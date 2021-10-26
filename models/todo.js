'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user }) {
      this.belongsTo(user, {
        as: 'todos',
        foreignKey: 'user_id',
      });
    }
  }

  Todo.init(
    {
      done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      menu_position: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'todo',
    }
  );
  return Todo;
};
