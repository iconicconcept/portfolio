const menu = document.querySelector(".menu-section")
const toggle = document.querySelector(".fa-bars")
const closeToggle = document.querySelector(".fa-close")

toggle.addEventListener("click", ()=>{
    toggle.style.display = "none"
    closeToggle.style.display = "flex"
    menu.style.display = "flex"
    console.log ("opened")
})

closeToggle.addEventListener("click", ()=>{
    toggle.style.display = "flex"
    closeToggle.style.display = "none"
    menu.style.display = "none"
    console.log ("closed")
})

