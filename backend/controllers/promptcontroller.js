const promptService = require("../services/promptService");

const optimizePrompt = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const optimizedPrompt = await promptService.optimizePrompt(prompt);

    res.status(200).json({
      success: true,
      originalPrompt: prompt,
      optimizedPrompt,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  optimizePrompt,
};