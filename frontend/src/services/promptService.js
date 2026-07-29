const API_URL = import.meta.env.VITE_API_URL;
// ==============================
// Optimize Prompt
// ==============================
export async function optimizePrompt(prompt, category) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/optimize`, {
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

// ==============================
// Get Prompt History
// ==============================
export async function getPromptHistory() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch history");
  }

  return data.prompts;
}

// ==============================
// Toggle Favorite
// ==============================
export async function toggleFavorite(promptId) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/${promptId}/favorite`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update favorite");
  }

  return data.prompt;
}