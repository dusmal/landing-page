import { getElements } from "./selectors";

function handleInvalidEmail(input) {
  const { emailInput, errorElement, border } = getElements();
  const email = input.value;
  const isInvalid = email && input.validity.typeMismatch;

  border.classList.toggle("border--error", isInvalid);
  emailInput.setAttribute("aria-invalid", isInvalid ? "true" : "false");

  if (isInvalid) {
    errorElement.textContent = "Please enter a valid email address";
  }
}

export function initEmailValidation() {
  const { emailInput, emailForm, errorElement } = getElements();

  let debounceTimer;

  emailInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    errorElement.textContent = "";

    debounceTimer = setTimeout(() => {
      handleInvalidEmail(e.target);
    }, 500);
  });

  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleInvalidEmail(emailInput);
  });
}
