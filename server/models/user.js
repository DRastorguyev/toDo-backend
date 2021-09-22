'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({todo}) {
      this.hasMany(todo, {
        as: 'users',
        foreignKey: 'user_id'
      })
    }
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: false,
      sequelize,
      modelName: 'user',
    }
  );
  return User;
};
