const promptService = require("../services/promptService");
const Prompt = require("../models/Prompt");

const optimizePrompt = async (req, res) => {
  try {
    const { prompt, style = "professional" } = req.body;

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Prompt cannot be empty.",
      });
    }

    if (prompt.trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: "Prompt must be at least 5 characters long.",
      });
    }

    // Increased limit for uploaded files
    if (prompt.length > 50000) {
      return res.status(400).json({
        success: false,
        message: "Prompt cannot exceed 50000 characters.",
      });
    }

    const optimizedPrompt = await promptService.optimizePrompt(
      prompt,
      style
    );
 await Prompt.create({
  userId: req.user.id,
  originalPrompt: prompt,
  optimizedPrompt,
  category: "General",
  model: "Gemini",
});
    return res.status(200).json({
      success: true,
      message: "Prompt optimized successfully",
      originalPrompt: prompt,
      optimizedPrompt,
    });

  } catch (error) {
    console.error("Optimization Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
// ==============================
// Get User Prompt History
// ==============================
const getPromptHistory = async (req, res) => {
  try {
    const prompts = await Prompt.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      prompts,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch prompt history",
    });
  }
};
module.exports = {
  optimizePrompt,
  getPromptHistory,
};