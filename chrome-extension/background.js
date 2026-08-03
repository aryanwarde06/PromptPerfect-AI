chrome.runtime.onInstalled.addListener(() => {
  console.log("✅ PromptPerfect AI Extension Installed");
});

let latestPrompt = "";

chrome.runtime.onMessageExternal.addListener(
  (message, sender, sendResponse) => {
    if (message.type === "OPEN_AI") {
      latestPrompt = message.prompt;

      chrome.tabs.create({
        url: message.url,
      });

      sendResponse({
        success: true,
      });
    }

    if (message.type === "GET_PROMPT") {
      sendResponse({
        prompt: latestPrompt,
      });
    }
  }
);