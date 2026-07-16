const client = require("../config/openrouter");

const optimizePrompt = async (prompt, category = "professional") => {
  let systemPrompt = "";

  switch (category.toLowerCase()) {
    case "creative":
      systemPrompt =
        "You are an expert creative prompt engineer. Rewrite the user's prompt to encourage creativity, imagination, and detailed outputs.";
      break;

    case "coding":
      systemPrompt =
        "You are an expert software prompt engineer. Rewrite the user's prompt so AI produces accurate, clean, well-structured, and production-ready programming solutions.";
      break;

    case "resume":
      systemPrompt =
        "You are an expert resume prompt engineer. Rewrite the user's prompt to generate ATS-friendly, professional resumes and cover letters.";
      break;

    case "email":
      systemPrompt =
        "You are an expert email prompt engineer. Rewrite the user's prompt to produce clear, professional, and well-structured emails.";
      break;

    case "business":
      systemPrompt =
        "You are a business prompt engineer. Rewrite the prompt to generate strategic business plans, ideas, and professional recommendations.";
      break;

    case "marketing":
      systemPrompt =
        "You are a marketing prompt engineer. Rewrite the prompt to generate persuasive, engaging, and conversion-focused marketing content.";
      break;

    case "education":
      systemPrompt =
        "You are an education prompt engineer. Rewrite the prompt to generate detailed learning materials, explanations, and educational content.";
      break;

    default:
      systemPrompt =
        "You are an expert prompt engineer. Convert the user's simple prompt into a detailed, professional AI prompt that produces high-quality responses.";
  }

  const response = await client.chat.completions.create({
    // Replace this with the OpenRouter model you want to use
    model: "openai/gpt-4.1-mini",

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

    temperature: 0.7,
    max_tokens: 800,
  });

  return response.choices[0].message.content;
};

module.exports = {
  optimizePrompt,
};