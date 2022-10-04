'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Event_attendees', {
      fields: ['event_id', 'user_id'],
      type: 'unique',
      name: 'event-user unique'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     queryInterface.removeConstraint('Event_attendees', 'event-user unique');
  }
};
