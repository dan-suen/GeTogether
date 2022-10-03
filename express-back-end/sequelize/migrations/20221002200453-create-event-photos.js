'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Event_photos', {
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
      photo: {
        type: Sequelize.STRING(255)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Event_photos');;
  }
};
