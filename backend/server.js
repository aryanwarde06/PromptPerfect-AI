const express = require("express");
const cors = require("cors");
require("dotenv").config();

const promptRoutes = require("./routes/promptRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("🚀 PromptPerfect AI Backend is Running");
});

// API Routes
app.use("/api/prompt", promptRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});