require('dotenv').config();

module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['dist/database/**/*.entity.js'],
  migrations: ['dist/database/migration/**/*.js'],
  subscribers: ['dist/database/subscriber/**/*.js'],
  cli: {
    entitiesDir: 'src/database',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/database/subscriber',
  },
};
