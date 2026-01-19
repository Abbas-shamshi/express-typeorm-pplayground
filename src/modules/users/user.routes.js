const express = require("express");
const { UserController } = require("./user.controller");

const router = express.Router();
const userController = new UserController();

// Routes
router.get("/", (req, res, next) => userController.getUsers(req, res, next));
router.get("/:id", (req, res, next) => userController.getUser(req, res, next));
router.post("/", (req, res, next) => userController.createUser(req, res, next));
router.delete("/:id", (req, res, next) =>
  userController.deleteUser(req, res, next),
);

module.exports = router;
