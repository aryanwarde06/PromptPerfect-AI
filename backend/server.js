const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");

const promptRoutes = require("./routes/promptRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const authRoutes = require("./routes/authRoutes");
const protect = require("./middleware/authMiddleware");

// Connect MongoDB
connectDB();

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
// Protected Test Route
// =============================
app.get("/api/protected", protect, (req, res) => {
  res.json({
    success: true,
    message: "You have accessed a protected route!",
    user: req.user,
  });
});
// =============================
// API Routes
// =============================
app.use("/api/prompts", promptRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/auth", authRoutes);

console.log("✅ Prompt routes mounted");
console.log("✅ Upload routes mounted");
console.log("✅ Auth routes mounted");

// =============================
// Server
// =============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});