const express = require("express");
const { AppDataSource } = require("./database");
const app = express();
app.use(express.json());
const { config } = require("./env/local");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const { subscribeToTopics } = require("./mqtt/mqttSubscriber");

const userRoutes = require("./modules/users/user.routes");
const mqttRoutes = require("./mqtt/mqtt.routes");

// Health check
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use("/users", userRoutes);
app.use("/mqtt", mqttRoutes);

app.use(errorMiddleware);

// Start server after DB connection
AppDataSource.initialize()
  .then(() => {
    console.log("✅ Database connected");

    subscribeToTopics();
    app.listen(config.SERVER_Port, () => {
      console.log(
        `🚀 Server running on http://localhost:${config.SERVER_Port}`,
      );
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed", error);
  });
