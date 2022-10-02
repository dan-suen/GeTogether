'use strict';
const { faker } = require('@faker-js/faker');
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
     return queryInterface.bulkInsert('Events', [
      {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: hash,
      photo: faker.image.avatar(),
      description: faker.company.bs(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: hash,
      photo: faker.image.avatar(),
      description: faker.company.bs(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: hash,
      photo: faker.image.avatar(),
      description: faker.company.bs(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: hash,
      photo: faker.image.avatar(),
      description: faker.company.bs(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: hash,
      photo: faker.image.avatar(),
      description: faker.company.bs(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: hash,
      photo: faker.image.avatar(),
      description: faker.company.bs(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: hash,
        photo: faker.image.avatar(),
        description: faker.company.bs(),
        createdAt: new Date(),
        updatedAt: new Date()
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
