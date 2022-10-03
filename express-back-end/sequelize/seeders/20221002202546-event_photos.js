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
     const events = await sequelize.query(`SELECT MAX(id) FROM "Events"`, { type: QueryTypes.SELECT });
     return queryInterface.bulkInsert('Event_photos', [
      {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
       },
       {
        event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
        photo: faker.image.animals()
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
    return queryInterface.bulkDelete('Event_photos', null, {});
  }
};
