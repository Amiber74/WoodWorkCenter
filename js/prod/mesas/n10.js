const contenedor = document.querySelector(".prod_ind")
const Productos = JSON.parse(localStorage.getItem("Productos"))
const lista_carrito = JSON.parse(localStorage.getItem("Carrito"))

for (const prod of Productos){
    if (prod.id == 10){
        const Prod = document.createElement('div')
        Prod.classList.add('Prod')
        Prod.innerHTML=`
        <div class="img"> <img src="${prod.imagen}" alt=""></div>
        <div class="nombre"> <h2>${prod.nombre}</h2> </div>
        <div class="precio"> <p>$${new Intl.NumberFormat(['ban', 'id']).format(prod.precio)}</p> </div>
        <div class="descripcion"><p>${prod.medidas}</p> <p>${prod.descripcion}</p></div>
        `
        contenedor.append(Prod)
        const boton = document.createElement('div')
        boton.classList.add('boton')
        boton.innerHTML = `
        <button type="submit"><p>Agregar a carrito</p></button>
        `   
        Prod.append(boton)
        boton.addEventListener("click", () => {
            const prod_C = Productos.find((p)=>p.id == 10)
            for (const Busq of lista_carrito) {
                let rep = lista_carrito.some((el)=>el.id == 10)
                if (rep){
                    return
                }
            }
            lista_carrito.push(prod_C)
            localStorage.setItem("Carrito", JSON.stringify(lista_carrito))
            
            Swal.fire({
                title:'Se agrego el producto correctamente',
                text:'(Recuerde especificar la cantidad, sino el producto no se cargara a la hora de pagar)',
                showConfirmButton: false,
                icon:'success',
                
            }).then((result)=>{
                console.log(String( result.isDismissed))
                if( String( result.isDismissed) === "true"){
                    location.reload()
                }
            })
        })


    }
}