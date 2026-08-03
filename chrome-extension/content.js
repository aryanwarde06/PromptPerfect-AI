console.log("✅ PromptPerfect Content Script Loaded");

window.addEventListener("load", () => {
  chrome.runtime.sendMessage(
    {
      type: "GET_PROMPT",
    },
    (response) => {
      if (!response || !response.prompt) {
        console.log("No prompt received.");
        return;
      }

      console.log("Prompt received:", response.prompt);

      // We will paste this into Gemini in the next step
    }
  );
});