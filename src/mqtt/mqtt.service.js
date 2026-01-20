const { client } = require("./mqttClient");

class MqttService {
  publish(topic, payload) {
    return new Promise((resolve, reject) => {
      client.publish(topic, JSON.stringify(payload), { qos: 1 }, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

module.exports = { MqttService };
