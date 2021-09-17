'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          id: 1,
          name: 'user1',
          done: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'user2',
          done: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'user3',
          done: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user', null, bulkDeleteOptions);
  },
};
