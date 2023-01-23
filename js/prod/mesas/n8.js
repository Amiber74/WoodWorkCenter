const contenedor = document.querySelector(".prod_ind")
const Productos = JSON.parse(localStorage.getItem("Productos"))
const lista_carrito = JSON.parse(localStorage.getItem("Carrito"))
const select = document.querySelector('#select')



//<div class="precio">  </div>

for (const prod of Productos){
    if (prod.id == 8.1){ 
        const Prod = document.createElement('div')
        Prod.classList.add('Prod')
        Prod.innerHTML=`
        <div class="img"> <img src="${prod.imagen}" alt=""></div>
        <div class="nombre"> <h2>${prod.nombre}</h2> </div>
        
        <div class="descripcion">
            <p>${prod.descripcion}</p>
        </div>
        `
        contenedor.append(Prod)

        const medida = document.createElement('div')
        medida.classList.add('medida')
        medida.innerHTML=`<form>
        <p>Medidas</p>
        <select id ="select" name="combo">
            <option value="8.1"selected>12 x 25 x 5</option>
            <option value="8.2" >15 x 25 x 5</option>
            <option value="8.3">18 x 25 x 5</option>
        </select>
        </form>`
        Prod.append(medida)
        
        let n_precio = null
        let id_nuevo = 8.1
        const precio = document.createElement('div')
        precio.classList.add('precio')
        precio.innerHTML=`<p>$${new Intl.NumberFormat(['ban', 'id']).format(prod.precio)}</p>`
        medida.addEventListener("change",(element)=>{
            console.log(element.target.value)
            const Medida_nueva=Productos.find((el)=>el.id===Number(element.target.value))
            if(Medida_nueva.id == 8.1){
                n_precio=Medida_nueva.precio
                precio.innerHTML=`<p>$${new Intl.NumberFormat(['ban', 'id']).format(n_precio)}</p>`
                id_nuevo=8.1
            }else if (Medida_nueva.id == 8.2){
                n_precio=Medida_nueva.precio
                precio.innerHTML=`<p>$${new Intl.NumberFormat(['ban', 'id']).format(n_precio)}</p>`
                id_nuevo=8.2
            } else if (Medida_nueva.id == 8.3){
                n_precio=Medida_nueva.precio
                precio.innerHTML=`<p>$${new Intl.NumberFormat(['ban', 'id']).format(n_precio)}</p>`
                id_nuevo=8.3
            }
            console.log(n_precio) 
        })
        Prod.append(precio)


        const boton = document.createElement('div')
        boton.classList.add('boton')
        boton.innerHTML = `
        <button type="submit"><p>Agregar a carrito</p></button>
        `   
        Prod.append(boton)
        boton.addEventListener("click", () => {
            const prod_C = Productos.find((p)=>p.id == id_nuevo)
            for (const Busq of lista_carrito) {
                let rep = lista_carrito.some((el)=>el.id == id_nuevo)
                if (rep){
                    return
                }
            }
            console.log(id_nuevo)
            lista_carrito.push(prod_C)
            localStorage.setItem("Carrito", JSON.stringify(lista_carrito))
            
            Swal.fire({
                title:'Se agrego el producto correctamente',
                text:'(Recuerde especificar la cantidad, sino el producto no se cargara a la hora de pagar)',
                showConfirmButton: false,
                icon:'success',
                
            }).then((result)=>{
                if( String( result.isDismissed) === "true"){
                    location.reload()
                }
            })
        })


    }
}


// select.addEventListener("change",()=>{
//     console.log(Number(select.value))
// })
