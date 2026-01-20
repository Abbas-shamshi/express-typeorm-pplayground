const { client } = require("./mqttClient");

function subscribeToTopics() {
  client.subscribe("devices/+/status", (err) => {
    if (err) {
      console.error("❌ MQTT subscribe failed", err);
    } else {
      console.log("📥 Subscribed to device status");
    }
  });

  client.on("message", (topic, message) => {
    console.log(`📩 [${topic}] ${message.toString()}`);
    // Handle the message as needed
  });
}

module.exports = { subscribeToTopics };
