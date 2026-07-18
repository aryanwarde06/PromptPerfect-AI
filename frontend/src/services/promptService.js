const API_URL = "http://localhost:5000/api/prompts/optimize";

export async function optimizePrompt(prompt, category) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        style: category, // Backend expects "style"
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