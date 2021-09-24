module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'todo',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
