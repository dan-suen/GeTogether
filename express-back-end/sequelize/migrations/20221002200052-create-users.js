'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('CREATE EXTENSION citext;');
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.CITEXT(10),
        allowNull: false
      },
      lastName: {
        type: Sequelize.CITEXT(10),
        allowNull: false
      },
      email: {
        type: Sequelize.CITEXT(20),
        unique: true,
        isEmail: true,
        allowNull: false
      },
      photo: {
        type: Sequelize.STRING(255)
      },
      username: {
        type: Sequelize.CITEXT(10),
        allowNull: false,
        unique: true
      },
      description: {
        type: Sequelize.STRING(350)
      },
      password: {
        type: Sequelize.CITEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    await queryInterface.sequelize.query('DROP EXTENSION citext;');
  }
};