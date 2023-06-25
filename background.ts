chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id || 0 },
      files: ["scripts/content.js"],
    },
    () => {
      chrome.tabs.sendMessage(
        tab.id || 0,
        { command: "stripSpaces" },
        (response) => {
          chrome.action.setBadgeText({
            text: response.count.toString(),
            tabId: tab.id,
          });
        }
      );
    }
  );
});
