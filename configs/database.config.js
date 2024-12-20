const { Sequelize } = require('sequelize');
const { config } = require('./app.config');

// Initialize Sequelize with environment variables
module.exports.sequelize = new Sequelize({
  dialect: config.DB_DIALECT,
  logging: (data) => console.log(data),
  storage: config.DB_STORAGE_PATH
});
