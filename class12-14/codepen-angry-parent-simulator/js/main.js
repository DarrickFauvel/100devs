const elFirstNameInput = document.querySelector("#first-name")
const elFirstMiddleNameInput = document.querySelector("#first-middle-name")
const elLastMiddleNameInput = document.querySelector("#last-middle-name")
const elLastNameInput = document.querySelector("#last-name")
const elResult = document.querySelector("#result")

function handleClick(e) {
  e.preventDefault()
  const constructedName = `${elFirstNameInput.value} ${elFirstMiddleNameInput.value} ${elLastMiddleNameInput.value} ${elLastNameInput.value}`
  elResult.textContent = constructedName
}

document.querySelector("button").addEventListener("click", handleClick)
