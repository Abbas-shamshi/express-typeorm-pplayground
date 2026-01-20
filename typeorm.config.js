const { DataSource } = require("typeorm");
const { User } = require("./src/modules/users/user.entity");
const { config } = require("./src/env/local");

module.exports = new DataSource({
  type: config.db_config.type,
  host: config.db_config.host,
  port: config.db_config.port,
  username: config.db_config.username,
  password: config.db_config.password,
  database: config.db_config.database,
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: ["src/migration/*.js"],
});
