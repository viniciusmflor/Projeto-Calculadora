export function calculate() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove("error")
}

document.getElementById("equal").addEventListener("click", calculate)

import { resultInput } from "./copy.js"