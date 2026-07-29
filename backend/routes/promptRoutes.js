const express = require("express");
const router = express.Router();

const {
  optimizePrompt,
  getPromptHistory,
  toggleFavorite,
} = require("../controllers/promptController");
const authMiddleware = require("../middleware/authMiddleware");

// Optimize prompt
router.post("/optimize", authMiddleware, optimizePrompt);

// Get prompt history
router.get("/history", authMiddleware, getPromptHistory);
router.patch("/:id/favorite", authMiddleware, toggleFavorite);
console.log("✅ promptRoutes loaded");

module.exports = router;