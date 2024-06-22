// FUNCTION BASICS TASK 4 of 4
// TITLE: Function pow(x, n)
const inputX = document.querySelector("#input-x")
const inputN = document.querySelector("#input-n")
const button = document.querySelector("#button")
const resultDisplay = document.querySelector("#result")

function pow(x, n) {
  let result = 1
  for (let i = 0; i < n; i++) {
    result *= x
  }
  resultDisplay.innerText = result
}

button.addEventListener("click", () => pow(+inputX.value, +inputN.value))
