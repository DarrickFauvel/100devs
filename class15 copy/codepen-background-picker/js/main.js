const elBody = document.querySelector("body")
document.querySelector("#magenta").addEventListener("click", handleClick)
document.querySelector("#green").addEventListener("click", handleClick)
document.querySelector("#cyan").addEventListener("click", handleClick)

function handleClick(e) {
  elBody.style.backgroundColor = e.target.textContent
  elBody.style.color = "white"
}
