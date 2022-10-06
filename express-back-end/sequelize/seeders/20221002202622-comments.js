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
   const events = await sequelize.query(`SELECT MAX(id) FROM "Events"`, { type: QueryTypes.SELECT }); 
   let seeds = [];
   for (let j = 1; j <= events[0].max; j++){
     for (let i = 0; i < 10; i ++) {
       seeds.push( {
        user_id:  Math.floor(Math.random()*(users[0].max-1))+1,
        event_id:  j,
        parent_comment_id: seeds.length > 10 ? Math.floor(Math.random()*(seeds.length-1))+1 :null,
        text: faker.lorem.sentences(1),
        createdAt: new Date()
       })
      }  
   }
   for (let i = 0; i < 10; i ++) {
    seeds.push( {
     user_id:  Math.floor(Math.random()*(users[0].max-1))+1,
     event_id:  Math.floor(Math.random()*(events[0].max-1))+1,
     parent_comment_id: seeds.length > 10 ? Math.floor(Math.random()*(seeds.length-1))+1 :null,
     text: faker.lorem.sentences(1),
     createdAt: new Date()
    })
   }  
   return queryInterface.bulkInsert('Comments', seeds);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
