const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const promptRoutes = require("./routes/promptRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// =============================
// Middleware
// =============================
app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =============================
// Request Logger
// =============================
app.use((req, res, next) => {
  const time = new Date().toLocaleString();

  console.log(`[${time}] ${req.method} ${req.originalUrl}`);

  next();
});

console.log("✅ Server file loaded");

// =============================
// Home Route
// =============================
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// =============================
// Debug Route
// =============================
app.post("/debug", (req, res) => {
  res.json({
    success: true,
    message: "Debug route works",
  });
});

// =============================
// API Routes
// =============================
app.use("/api/prompts", promptRoutes);

app.use("/api/upload", uploadRoutes);

console.log("✅ Prompt routes mounted");
console.log("✅ Upload routes mounted");

// =============================
// Server
// =============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});