'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('times',{
    id:{
      type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
    },
    last_recorded_time:{
      type:Sequelize.BIGINT,
      allowNull:false,
      defaultValue: 0,
    },
    createdAt:{
      type:Sequelize.DATE,
      default:Sequelize.DATE.NOW()
    },
    updatedAt:{
      
    }
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
