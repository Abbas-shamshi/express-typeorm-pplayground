const { MqttService } = require("./mqtt.service");
const mqttService = new MqttService();

class MqttController {
  async publish(req, res) {
    console.log("MQTT Publish Request Body:", req.body);
    try {
      const { topic, message } = req.body;

      // Publish to MQTT broker
      await mqttService.publish(topic, message);

      res.json({ success: true, topic, message });
    } catch (err) {
      console.error("MQTT publish error:", err);
      res.status(500).json({ error: "Failed to publish message" });
    }
  }
}

module.exports = { MqttController };
