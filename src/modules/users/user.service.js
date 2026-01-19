const { userRepository } = require("./user.repository");

class UserService {
  async getAllUsers() {
    return userRepository().find();
  }

  async getUserById(id) {
    return userRepository().findOneBy({ id });
  }

  async createUser(data) {
    const repo = userRepository();

    const existingUser = await repo.findOneBy({ email: data.email });
    if (existingUser) {
      throw new Error("Email already exists");
    }

    const user = repo.create(data);
    return repo.save(user);
  }

  async deleteUser(id) {
    return userRepository().delete(id);
  }
}

module.exports = { UserService };
