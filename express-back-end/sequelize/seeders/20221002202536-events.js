'use strict';
const { faker } = require('@faker-js/faker');
const { QueryTypes, Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  "dialect": "postgres",
});
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const users = await sequelize.query(`SELECT MAX(id) FROM "Users"`, { type: QueryTypes.SELECT });
     const randUserId = Math.floor(Math.random()*(users-1))+1
     return queryInterface.bulkInsert('Events', [
      {
        host_id:  Math.floor(Math.random()*(users-1))+1,
        event_time: {
          type: Sequelize.DATE,
          allowNull: false
        },
        location: {
          type: Sequelize.STRING(60),
          allowNull: false
        },
        price: Math.floor(Math.random()*(1000)),
        spots: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        remaining_spots: {
          type: Sequelize.INTEGER
        },
        status_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        description: faker.commerce.productDescription(),
        photo: {
          type: Sequelize.STRING(255)
        }
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Events', null, {});
  }
};
