'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Event_attendees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Events",
          key: 'id'
        },
        onDelete: 'cascade'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: 'id'
        },
        onDelete: 'cascade'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Event_attendees');;
  }
};
