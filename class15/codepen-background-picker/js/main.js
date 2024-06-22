const elBody = document.querySelector("body")
const elControls = document.querySelectorAll("#remote div")

function handleClick(e) {
  elBody.style.backgroundColor = e.target.textContent
  elBody.style.color = "white"
}

elControls.forEach((control) => {
  control.style.backgroundColor = control.textContent
  control.addEventListener("click", handleClick)
})
