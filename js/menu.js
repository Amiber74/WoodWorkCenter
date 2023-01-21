const menu = document.querySelector(".menu")
let linea1 = document.querySelector(".linea1_menu")
let linea2 = document.querySelector(".linea2_menu")
let linea3 = document.querySelector(".linea3_menu")
let navegador = document.querySelector("#menu")
let body = document.querySelector("#body")


menu.addEventListener("click",()=>{
    linea1.classList.toggle("linea1_menu-activa")
    linea2.classList.toggle("linea2_menu-activa")
    linea3.classList.toggle("linea3_menu-activa")
    navegador.classList.toggle("activado")
})