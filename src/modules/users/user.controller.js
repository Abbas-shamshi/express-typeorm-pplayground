const { UserService } = require("./user.service");
const userService = new UserService();

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getUser(req, res) {
    try {
      const id = parseInt(req.params.id);
      const user = await userService.getUserById(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async createUser(req, res) {
    console.log("Request Body:" ,req.body);
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const id = parseInt(req.params.id);
      await userService.deleteUser(id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = { UserController };
