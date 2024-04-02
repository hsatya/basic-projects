const password = document.querySelector("#pass");
const passLengthInput = document.querySelector("#passLength");
const lengthDisplay = document.querySelector("#length");
const numAllowedInput = document.querySelector("#numAllowed");
const charAllowedInput = document.querySelector("#charAllowed");
const copyButton = document.querySelector("#copyButton");

let numberAllowed = false;
let charAllowed = false;
let length = 8;

function passwordGenerator() {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "~`!@#$%^&*()_+-=[]{}";

  for (let i = 0; i < length; ++i) {
    const index = Math.floor(Math.random() * str.length);
    pass += str.charAt(index);
  }

  return pass;
}

function updateLength() {
  length = Number(passLengthInput.value);
  lengthDisplay.textContent = length;
  password.value = passwordGenerator();
}

function handleNumberCheckboxChange() {
  numberAllowed = this.checked;
  password.value = passwordGenerator();
}

function handleCharCheckboxChange() {
  charAllowed = this.checked;
  password.value = passwordGenerator();
}

function copyToClipboard() {
  password.select();
  //   password.setSelectionRange(0, 25);
  //   document.execCommand("copy");
  window.navigator.clipboard.writeText(password.value);
}

passLengthInput.addEventListener("input", updateLength);
numAllowedInput.addEventListener("change", handleNumberCheckboxChange);
charAllowedInput.addEventListener("change", handleCharCheckboxChange);
copyButton.addEventListener("click", copyToClipboard);

password.value = passwordGenerator();
