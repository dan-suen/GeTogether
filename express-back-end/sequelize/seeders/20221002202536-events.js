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
     let seeds = [];
     let locations = [
      "662 King St W #101, Toronto, ON M5V 1M7",
      "250 Av. Clarke #1010, Westmount, QC H3Z 2E5",
      "630 8 Ave SW #600, Calgary, AB T2P 1G6",
      "401 W Georgia St #600, Vancouver, BC V6B 5A1",
      "66 Slater St. #311, Ottawa, ON K1P 5K8",
      "2031 Store St, Victoria, BC V8T 5L9"
     ]
     for (let i = 0; i < 10; i ++) {
       const spots = Math.floor(Math.random()*(99))+1;
       const remain = Math.floor(Math.random()*(spots))+1;
       seeds.push({
         host_id:  Math.floor(Math.random()*(users[0].max-1))+1,
         event_time: faker.date.future(1) ,
         location:locations[i%5],
         price: Math.floor(Math.random()*(1000)),
         spots: spots,
         remaining_spots: remain,
         status_active: Math.random() < 0.5,
         description: faker.commerce.productDescription(),
         photo: faker.image.animals(),
         createdAt: new Date()
        })
      }
     return queryInterface.bulkInsert('Events', seeds);
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