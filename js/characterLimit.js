import { getElements } from "./selectors";

export function initCharacterLimitCount() {
  const { messageTextArea, charLimitSpan } = getElements();
  const maxLen = messageTextArea.maxLength;

  messageTextArea.addEventListener("input", () => {
    const currentLen = messageTextArea.value.length;
    charLimitSpan.textContent = `${currentLen}/${maxLen}`;
  });
}
