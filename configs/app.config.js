const path = require('path');

module.exports.config = {
  PORT: process.env.PORT || 3001,
  DB_DIALECT: process.env.DB_DIALECT || 'sqlite',
  DB_NAME: process.env.DB_NAME || 'lite-mail',
  DB_URL: process.env.DB_URL || 'localhost',
  DB_PORT: process.env.DB_PORT || 3306,
  DB_USERNAME: process.env.DB_USERNAME || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'toor',
  DB_STORAGE_PATH: path.join(__dirname, '../lite-mail.db')
};
