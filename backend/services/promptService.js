const client = require("../config/openrouter");

const optimizePrompt = async (prompt) => {
  const response = await client.chat.completions.create({
    model: "openrouter/free",
    messages: [
      {
        role: "system",
        content:
          "You are an expert prompt engineer. Convert any simple prompt into a professional AI prompt.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content;
};

module.exports = {
  optimizePrompt,
};