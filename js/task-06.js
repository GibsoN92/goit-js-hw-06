const input = document.getElementById("validation-input");
const maxLength = parseInt(input.getAttribute("data-length"));

input.addEventListener("blur", () => {
  const inputLength = input.value.length;

  if (inputLength === maxLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
