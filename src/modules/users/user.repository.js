const { AppDataSource } = require("../../database");
const { User } = require("./user.entity");

const userRepository = () => {
  return AppDataSource.getRepository(User);
};

module.exports = { userRepository };
