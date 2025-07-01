const Sequelize = require("sequelize");

const sequelize = new Sequelize("timer", "root", "rootadmin", {
   host: "127.0.0.1",
   database: '',
});

module.exports = sequelize;