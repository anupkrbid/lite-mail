const app = require('./app');
const { sequelize, config } = require('../../configs');

(async () => {
  try {
    await sequelize.sync();

    console.log('Database connected successfully.');

    await app.listen(config.PORT);

    console.log(`Server is running on http://localhost:${config.PORT}`);
  } catch (error) {
    console.error('Failed to start the application:', error);
    await sequelize.close();
    process.exit(1);
  }
})();
