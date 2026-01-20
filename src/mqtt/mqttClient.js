const mqtt = require("mqtt");
const { config } = require("../env/local");

const client = mqtt.connect(config.mqtt_url);

client.on("connect", () => {
  console.log("📡 MQTT connected");
});

client.on("reconnect", () => {
  console.log("🔄 MQTT reconnecting...");
});

client.on("error", (err) => {
  console.error("❌ MQTT error", err);
});

module.exports = { client };
