
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class time extends Model {
    static associate(models) {
        time.belongsTo(models.user);
    }
  }
  time.init({
    id:{
        type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
      },
      userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      last_recorded_time:{
        type:DataTypes.BIGINT,
        allowNull:false,
        defaultValue: 0,
      },
      createdAt:{
        type:DataTypes.BIGINT,
        default:dayjs.unix(),
        allowNull: false
      },
      updatedAt:{
          type:DataTypes.BIGINT,
          default:dayjs.unix(),
          allowNull: false
      }
  }, {
    sequelize,
    modelName: 'time',
  });
  return time;
};
