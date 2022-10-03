'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
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
      },
      parent_comment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Comments",
          key: 'id'
        },
        onDelete: 'cascade'
      },
      text: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');;
  }
};
