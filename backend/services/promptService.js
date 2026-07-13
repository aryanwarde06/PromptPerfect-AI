const client = require("../config/openrouter");

const optimizePrompt = async (prompt, style = "professional") => {

  let systemPrompt = "";

  switch (style.toLowerCase()) {

    case "creative":
      systemPrompt =
        "You are an expert creative prompt engineer. Rewrite the user's prompt to encourage creativity, imagination and detailed outputs.";
      break;

    case "coding":
      systemPrompt =
        "You are an expert software prompt engineer. Rewrite the user's prompt so AI produces accurate, clean and well-structured programming solutions.";
      break;

    case "academic":
      systemPrompt =
        "You are an academic prompt engineer. Rewrite the prompt to produce detailed, research-oriented and educational responses.";
      break;

    case "marketing":
      systemPrompt =
        "You are a marketing prompt engineer. Rewrite the prompt to generate persuasive, engaging and conversion-focused content.";
      break;

    default:
      systemPrompt =
        "You are an expert prompt engineer. Convert any simple prompt into a professional AI prompt.";
  }

  const response = await client.chat.completions.create({
    model: "openrouter/free",

    messages: [
      {
        role: "system",
        content: systemPrompt,
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