const API_URL = "http://localhost:5000/api/prompts/optimize";

export async function optimizePrompt(prompt, category) {
  try {
    // Get JWT token from localStorage
    const token = localStorage.getItem("token");

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        prompt,
        style: category,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to optimize prompt");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
export async function getPromptHistory() {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "http://localhost:5000/api/prompts/history",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.prompts;
}