const express = require("express");
const router = express.Router();

const { optimizePrompt } = require("../controllers/promptController");

// POST API
router.post("/optimize", optimizePrompt);

module.exports = router;