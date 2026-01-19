const { userRepository } = require("./user.repository");
const { AppError } = require("../../utils/appError");

class UserService {
  async getAllUsers() {
    return userRepository().find();
  }

  async getUserById(id) {
    const user = await userRepository().findOneBy({ id });
    if (!user) {
      throw new AppError("User not found", 404);
    }
    return user;
  }

  async createUser(data) {
    const repo = userRepository();

    const existingUser = await repo.findOneBy({ email: data.email });
    if (existingUser) {
      throw new AppError("Email already exists", 400);
    }

    const user = repo.create(data);
    return repo.save(user);
  }

  async deleteUser(id) {
    const result = await userRepository().delete(id);
    if (result.affected === 0) {
      throw new AppError("User not found", 404);
    }
  }
}

module.exports = { UserService };
