const promptService = require("../services/promptService");

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

if (prompt.length > 1000) {
  return res.status(400).json({
    success: false,
    message: "Prompt cannot exceed 1000 characters.",
  });
}

   const optimizedPrompt =
  await promptService.optimizePrompt(prompt, style);
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

module.exports = {
  optimizePrompt,
};