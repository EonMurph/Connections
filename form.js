let form;
let formInputs;
let formErrors;

document.addEventListener("DOMContentLoaded", initForm, false);

function initForm() {
  form = document.querySelector("form#grid-form");
  formInputs = form.querySelectorAll(":not([type='submit'])");
  formErrors = document.querySelector("p#form-errors");

  form.addEventListener("submit", submitFormData, false);
  for (let input of formInputs) {
    input.value = "t";
  }
}

function submitFormData(event) {
  event.preventDefault();
  let errorMessage = validateFormData();
  formErrors.innerHTML =
    typeof errorMessage === "undefined" ? "" : errorMessage;
  if (!formErrors.innerHTML) {
    console.log("Implement database code.")
  }
}

function validateFormData() {
  for (let input of formInputs) {
    if (!input.value) {
      return "Please fill out the whole grid.";
    } else if (!isNaN(input.value)) {
      return "Please only input letters.";
    }
  }
}
