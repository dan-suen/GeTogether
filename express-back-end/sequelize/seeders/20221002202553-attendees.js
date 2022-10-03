'use strict';
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
     const events = await sequelize.query(`SELECT MAX(id) FROM "Events"`, { type: QueryTypes.SELECT });
     let seeds = [];
     for (let i = 0; i < events[0].max; i ++) {
      for (let j = 0; j < 5; j ++) {
        let query = [];
        query.push(Math.floor(Math.random()*(users[0].max-1))+1);
        query.push(Math.floor(Math.random()*(i))+1);
        let query1 = "(" + query.join(", ") + ")";
        seeds.push(query1)
      }
    }
      return queryInterface.sequelize.query(
        `INSERT INTO "Event_attendees" (user_id, event_id) VALUES 
        ${seeds.join(", ")}
        ON CONFLICT DO NOTHING;`
      );
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Event_attendees', null, {});
  }
};
