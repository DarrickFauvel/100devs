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
function functionBasicsTask4of4() {
  const inputX = prompt("x?")
  const inputN = prompt("n?")

  function pow(x, n) {
    let result = 1
    for (let i = 0; i < n; i++) {
      result *= x
    }
    if (!x > 0) {
      alert(`Power ${n} is not supported, use a positive integer`)
    } else {
      alert(result)
    }
  }

  pow(+inputX, +inputN)
}
// functionBasicsTask4of4()

// -------------------------
// FUNCTION EXPRESSION TASKS
// -------------------------

// No function expression tasks

// ---------------------------
// ARROW FUNCTION BASICS TASKS
// ---------------------------

// ARROW FUNCTION BASICS TASK 1 of 1
// TITLE: Rewrite with arrow functions
function arrowFunctionBasicsTask1of1() {
  const ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no()
  }

  ask(
    "Do you agree?",
    () => {
      alert("You agreed.")
    },
    () => {
      alert("You canceled the execution.")
    }
  )
}
// arrowFunctionBasicsTask1of1()
