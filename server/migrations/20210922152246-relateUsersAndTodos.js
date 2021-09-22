'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('todos', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('todos', 'user_id');
  },
};
