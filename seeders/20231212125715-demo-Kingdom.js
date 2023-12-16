'use strict';
const fs = require('fs')


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
    let data = JSON.parse(fs.readFileSync("./data/kingdom.json","utf-8"))
    data.forEach(element => {
      delete element.id
      element.createdAt= new Date()
      element.updatedAt= new Date()
      return  element
    });
    await queryInterface.bulkInsert("Kingdoms",data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Kingdoms", null ,{})
  }

};
