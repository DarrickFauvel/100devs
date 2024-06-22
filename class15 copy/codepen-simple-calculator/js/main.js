const elControls = document.querySelectorAll("#controls div")
const elResult = document.querySelector("#result")
let resultTotal = 0

function handleClick(e) {
  const numberValue = Number(e.target.textContent)
  resultTotal = resultTotal + numberValue
  elResult.textContent = resultTotal
}

elControls.forEach((control) => control.addEventListener("click", handleClick))
