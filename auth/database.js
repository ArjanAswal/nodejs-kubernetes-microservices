const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  });

module.exports = sequelize;
