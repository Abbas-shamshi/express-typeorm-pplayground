const express = require("express");
const { MqttController } = require("./mqtt.controller");

const router = express.Router();
const mqttController = new MqttController();

router.post("/publish", (req, res) => mqttController.publish(req, res));

module.exports = router;
