// ---------------
// VARIABLES TASKS
// ---------------

// VARIABLES TASK 1 of 3
// TITLE: Working with variables
let admin
let name
name = "John"
admin = name
// alert(`admin: ${admin}`);

// VARIABLES TASK 2 of 3
// TITLE: Giving the right name
let ourPlanetName = "Earth"
let currentVisitorName

// VARIABLES TASK 3 of 3
// TITLE: Uppercase const?
// ANSWER: Uppercase BIRTHDAY would be correct because the value will not change.

// ---------------------
// FUNCTION BASICS TASKS
// ---------------------

// FUNCTION BASICS TASK 1 of 4
// TITLE: Is "else" required?
// ANSWER: No. There is no difference in behavior between the two functions.

// FUNCTION BASICS TASK 2 of 4
// TITLE: Rewrite the function using '?' or '||'
// ANSWER 1 of 2:
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Did parents allow you?');
// }
// checkAge(19);

// ANSWER 2 of 2:
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?")
}
// checkAge(18);

// FUNCTION BASICS TASK 3 of 4
// TITLE: Function min(a, b)
function min(a, b) {
  return a < b ? a : b
}
// min(3, 2);

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
