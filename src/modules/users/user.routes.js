const express = require("express");
const { UserController } = require("./user.controller");
const { validate } = require("../../middleware/validateMiddleware");
const { createUserSchema } = require("./user.schema");

const router = express.Router();
const userController = new UserController();

// Routes
router.get("/", userController.getUsers.bind(userController));
router.get("/:id", userController.getUser.bind(userController));
router.post(
  "/",
  validate(createUserSchema),
  userController.createUser.bind(userController),
);
router.delete("/:id", userController.deleteUser.bind(userController));

module.exports = router;
