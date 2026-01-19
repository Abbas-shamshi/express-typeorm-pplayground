const express = require("express");
const { UserController } = require("./user.controller");

const router = express.Router();
const userController = new UserController();

// Routes
router.get("/", (req, res) => userController.getUsers(req, res));
router.get("/:id", (req, res) => userController.getUser(req, res));
router.post("/", (req, res) => userController.createUser(req, res));
router.delete("/:id", (req, res) => userController.deleteUser(req, res));

module.exports = router;
