import { concatenation } from "./concatenation";

const concat = document.getElementById("concat")!;
const reset = document.getElementById("reset")!;
const input = document.querySelector("input")!;
const parah = document.querySelector("p")!;

const setButton = () => {
  let text = concatenation(input.value, "hello!");
  parah.textContent = text;
};

const resetButton = () => {
  input.value = "";
  parah.textContent = "";
};

if (concat && input) {
  concat.addEventListener("click", setButton);
}

reset.addEventListener("click", resetButton);
