// controllers/promptController.js

const optimizePrompt = (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({
            success: false,
            message: "Prompt is required"
        });
    }

    // Temporary response (Later we'll connect AI)
    const optimizedPrompt =
        `Write the following prompt in a professional and detailed way:\n\n${prompt}`;

    res.status(200).json({
        success: true,
        originalPrompt: prompt,
        optimizedPrompt: optimizedPrompt
    });
};

module.exports = {
    optimizePrompt
};