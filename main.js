const menuClose = document.querySelector("#stripes")
const cancel = document.querySelector("#cancel")
const menuShow = document.querySelector(".mobile-menu")

menuClose.addEventListener("click", () => {
    menuShow.classList.toggle("hidden")
    menuClose.classList.toggle("hidden")
    cancel.classList.toggle("hidden")
})

cancel.addEventListener("click", () => {
    menuShow.classList.toggle("hidden")
    menuClose.classList.toggle("hidden")
    cancel.classList.toggle("hidden")
})