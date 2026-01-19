const express = require("express");
const { AppDataSource } = require("./database");
const userRoutes = require("./modules/users/user.routes");
const app = express();
app.use(express.json());
const { config } = require("./env/local");

// Health check
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use("/users", userRoutes);

// Start server after DB connection
AppDataSource.initialize()
  .then(() => {
    console.log("✅ Database connected");

    app.listen(config.SERVER_Port, () => {
      console.log(`🚀 Server running on http://localhost:${config.SERVER_Port}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed", error);
  });
