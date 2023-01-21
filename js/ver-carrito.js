
const cont = document.querySelector("#carrito")
let img = document.querySelector(".carrito")



img.addEventListener(("click"), ()=>{
    cont.classList.toggle("activo")
    Swal.fire({
        icon:'warning',
        iconColor:'black',
        confirmButtonColor: 'gray',
        title:'Revise si las cantidades son correctas',
        text:'Si la cantidad es menor o igual a 0 no se cargara a la hora de pagar',
    })
})