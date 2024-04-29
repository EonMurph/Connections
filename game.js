let gridSection;
let grid;
let gridForm;
let formInputs;
let formErrors;

document.addEventListener("DOMContentLoaded", initForm, false);

function initGrid() {
  gridSection = document.querySelector("section#grid");
  grid = gridSection.children;
}

function initForm() {
  gridForm = document.querySelector("form#grid-form");
  formInputs = gridForm.querySelectorAll(":not([type='submit'])");
  formErrors = document.querySelector("p#form-errors");

  gridForm.addEventListener("submit", submitFormData, false);
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
    startGame();
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

function startGame() {
  initGrid();

  gridForm.style.display = "none";
  gridSection.style.display = "grid";
}
