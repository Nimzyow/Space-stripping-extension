chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command == "stripSpaces") {
    const inputs = document.querySelectorAll(
      "input[type=text], textarea"
    ) as NodeListOf<HTMLTextAreaElement>;
    let count = 0;
    inputs.forEach((input) => {
      const existingValue = input.value;
      let newValue = input.value.trim();
      if (existingValue !== newValue) {
        input.value = input.value.trim();
        count++;
      }
    });
    sendResponse({ count });
  }
});
