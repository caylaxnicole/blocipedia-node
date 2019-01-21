'use strict';
const faker = require("faker");

let wikis = [];
for(let i = 1; i <= 10; i++){
  wikis.push({
    userId: 2,
    title: faker.hacker.noun(),
    body: faker.hacker.phrase(),
    private: false,
    createdAt: new Date(),
    updatedAt: new Date()
  });
}
module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert("Wikis", wikis, {});
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete("Wikis", null, {});
  }
};
