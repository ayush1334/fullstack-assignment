'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      
   
   await queryInterface.createTable('times',{
    id:{
      type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
    },
    userId:{
      type: Sequelize.INTEGER,
      allowNull:false,
    },
    last_recorded_time:{
      type:Sequelize.BIGINT,
      allowNull:false,
      defaultValue: 0,
    },
    createdAt:{
      type:Sequelize.BIGINT,
      default:Sequelize.fn('EXTRACT', Sequelize.literal('UNIX_TIMESTAMP()')),
      allowNull: false
    },
    updatedAt:{
        type:Sequelize.BIGINT,
        default:Sequelize.fn('EXTRACT', Sequelize.literal('UNIX_TIMESTAMP()')),
        allowNull: false
    }
   });


   await queryInterface.addConstraint('times', {
    type: 'foreign key',
    references: {
      table: 'users',
      field: 'id'
    },
    fields: ['userId'],
    name: 'time_user_fk1'
   })
  } catch (error) {
      console.log(error)
  }
  },

  async down (queryInterface, Sequelize) {
    console.log('later')
  }
};
