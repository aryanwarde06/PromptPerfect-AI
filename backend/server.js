const express = require("express");
const cors = require("cors");
require("dotenv").config();

const promptRoutes = require("./routes/promptRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Request Logger Middleware
app.use((req, res, next) => {
  const time = new Date().toLocaleString();

  console.log(`[${time}] ${req.method} ${req.originalUrl}`);

  next();
});

console.log("✅ Server file loaded");

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Debug Route
app.post("/debug", (req, res) => {
  res.json({
    success: true,
    message: "Debug route works",
  });
});

// Prompt Routes
app.use("/api/prompts", promptRoutes);

console.log("✅ Prompt routes mounted");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});