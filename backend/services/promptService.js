const client = require("../config/openrouter");

const optimizePrompt = async (prompt, style = "professional") => {

  let systemPrompt = "";

  switch (style.toLowerCase()) {

    case "coding":
      systemPrompt = `
You are a Senior Software Engineer and Prompt Engineering Expert.

Your job is NOT to answer the user's request.

Your job is ONLY to convert the user's short request into a professional AI prompt.

The optimized prompt MUST contain these sections:

1. Role
2. Objective
3. Requirements
4. Output Format
5. Constraints

Make the prompt detailed, structured, and easy for AI models to understand.

Return ONLY the optimized prompt.
`;
      break;

    case "resume":
      systemPrompt = `
You are an expert Resume Writer.

Rewrite the user's request into a detailed AI prompt.

Include:

Role
Objective
Required Information
Desired Output
Formatting Instructions

Return only the optimized prompt.
`;
      break;

    case "marketing":
      systemPrompt = `
You are a Senior Marketing Strategist.

Rewrite the user's request into a professional marketing prompt.

Include:

Role
Target Audience
Objective
Requirements
Tone
Output Format

Return only the optimized prompt.
`;
      break;

    case "business":
      systemPrompt = `
You are a Business Consultant.

Rewrite the user's request into a detailed AI prompt.

Include:

Role
Business Goal
Requirements
Expected Output
Constraints

Return only the optimized prompt.
`;
      break;

    case "education":
      systemPrompt = `
You are an Academic Prompt Engineer.

Rewrite the prompt into a detailed educational prompt.

Include:

Role
Learning Objective
Topics
Difficulty Level
Output Format

Return only the optimized prompt.
`;
      break;

    default:
      systemPrompt = `
You are the world's best Prompt Engineer.

Transform every simple user prompt into a professional AI prompt.

Always include:

Role

Objective

Requirements

Output Format

Constraints

Return ONLY the optimized prompt.
`;
  }

  const response = await client.chat.completions.create({

    model: "openrouter/free",

    temperature: 0.9,

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