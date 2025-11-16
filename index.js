const formCard = document.querySelector(".form-card");
const form = document.getElementById("email-form");
const successCard = document.querySelector(".success-card");
const errorMessage = document.querySelector(".error-message");
const successEmail = document.querySelector(".success-email");

const emailRegex = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;

function handleSubmit(e) {
  e.preventDefault();
  const formInput = e.target.querySelector("input");
  const email = formInput.value;
  if (!isValid(email)) {
    toggleHidden(errorMessage);
    formInput.classList.toggle("active-error");
  } else {
    toggleHidden(formCard);
    toggleHidden(successCard);
    successEmail.textContent = email;
  }
}

form.addEventListener("submit", handleSubmit);

function isValid(string) {
  return emailRegex.test(string);
}

function toggleHidden(element) {
  element.classList.toggle("hidden");
}
