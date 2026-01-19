require("reflect-metadata");
const { DataSource } = require("typeorm");
const { User } = require("./modules/users/user.entity");
const { config } = require("./env/local");

const AppDataSource = new DataSource({
  type: config.db_config.type,
  host: config.db_config.host,
  port: config.db_config.port,
  username: config.db_config.username,
  password: config.db_config.password,
  database: config.db_config.database,
  synchronize: true, // auto-create tables (dev only)
  logging: false,
  entities: [User],
});

module.exports = { AppDataSource };
