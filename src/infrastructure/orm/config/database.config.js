const { config } = require('../../../../configs');

module.exports = {
  development: {
    dialect: config.DB_DIALECT,
    storage: config.DB_STORAGE_PATH
  },
  test: {
    dialect: config.DB_DIALECT,
    storage: config.DB_STORAGE_PATH
  },
  production: {
    dialect: config.DB_DIALECT,
    storage: config.DB_STORAGE_PATH
  }
};
