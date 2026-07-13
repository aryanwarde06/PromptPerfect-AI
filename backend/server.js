const express = require("express");
const cors = require("cors");
require("dotenv").config();

const promptRoutes = require("./routes/promptRoutes");

const app = express();

app.use(cors());
app.use(express.json());

console.log("✅ Server file loaded");

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/prompts", promptRoutes);

console.log("✅ Prompt routes mounted");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});