'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("exercises", [
     {exercise_type: "Cardio", exercise_name: "Running", createdAt : new Date(), updatedAt : new Date() },
     {exercise_type: "Weights", exercise_name: "Bench Press", createdAt : new Date(), updatedAt : new Date() },
     {exercise_type: "Weights", exercise_name: "Lat Pull", createdAt : new Date(), updatedAt : new Date() }
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("exercises", null, {});
  }
};
