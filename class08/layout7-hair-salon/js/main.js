const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")
const navMenu = document.querySelector(".nav-menu")

const toggleMenu = () => {
  navMenu.classList.toggle("visually-hidden")
  menuIcon.classList.toggle("visually-hidden")
}

document.addEventListener("click", (e) => {
  const outsideClick = !navMenu.contains(e.target)
  outsideClick && toggleMenu()
})

menuIcon.addEventListener("click", toggleMenu)
