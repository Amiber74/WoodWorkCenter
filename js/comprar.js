const productos = JSON.parse(localStorage.getItem("Carrito"))
const lista_prod = document.querySelector('.detalles')
const precios_prod = document.querySelector('.formulario')
const boton = document.querySelector('.button')
const form = document.querySelector('.form_enviar')


const lista = JSON.parse(localStorage.getItem("Productos-pagar"))


let Producto_Pago = []
const Producto_PagoLS = JSON.parse(localStorage.getItem("Productos-pagar"))
if (Producto_Pago !== null){
    Producto_Pago = Producto_PagoLS|| localStorage.setItem("Productos-pagar",JSON.stringify(Producto_Pago))
}





let carrito_Ls = []

if(carrito_Ls !==null){
    carrito_Ls=productos || localStorage.setItem("Carrito",JSON.stringify( carrito_Ls))
}


for (const prod of Producto_Pago) {
    const div = document.createElement('div')
    div.classList.add('productos')
    div.innerHTML=`
    <img src="${prod.imagen}">
    <p class="nombre">${prod.nombre}</p>
    <p class="precio">$${new Intl.NumberFormat(['ban', 'id']).format(prod.valor)} </p>
    `
    lista_prod.append(div)

    const eliminar = document.createElement('div')
    eliminar.classList.add('eliminar')
    eliminar.innerHTML=`
    <span class="linea_1"></span>
    <span class="linea_2"></span>
    `
    eliminar.addEventListener("click",()=>{

        const prod_eliminar = Producto_Pago.find((dato)=>dato.id === prod.id)
        let pos =Producto_Pago.indexOf(prod_eliminar)
        Producto_Pago.splice(pos,1)

        localStorage.setItem("Productos-pagar",JSON.stringify(Producto_Pago))


        
        location.reload()


    })
    div.append(eliminar)
}

// let lista_simple = []
function lista_nueva (nombre, precio, cant, total){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad=cant;
    this.total=total;
}



let acum = 0
lista.forEach((num)=>{
    const precios = document.createElement('div')
    precios.classList.add('precios')
    precios.innerHTML=`
    <p class="cantidad"> ${num.cantidad}x</p>
    <p class="tipo"> ${num.tipo.toUpperCase()} </p>
    <p class="precio"> $${new Intl.NumberFormat(['ban', 'id']).format(num.valor)} </p>
    <p class="total"> $${new Intl.NumberFormat(['ban', 'id']).format(num.valor_total)}</p>
    `
    precios_prod.append(precios)
    
    acum += num.valor_total

})
const total = document.createElement('div')
total.classList.add('total_pagar')
total.innerHTML=`
<p class="total"> Total </p>
<p class="precio_total">$${new Intl.NumberFormat(['ban', 'id']).format(acum)}</p>
`
precios_prod.append(total)


const formulario = document.createElement('div')
formulario.innerHTML=`
<form action="https://formsubmit.co/rojas.facundo2002@gmail.com" method="POST" >
    <label for="nombre" id="text-nombre"> Nombre </label>
    <input type="text" name="nombre" id="nombre">
    
    <label for="email" id="text-email">Email</label>
    <input type="email" name="email" id="email">

    <label for="comentario" id="text-comentario">Comentario</label>
    <textarea name="comentario" cols="15" rows="7" id="comentario" placeholder="Porfavor especifique que productos desea comprar junto a sus respectivas cantidades. Dentro de las proximas 48hs habiles le responderemos"></textarea>

    <input type="hidden" name="Total" value="$${new Intl.NumberFormat(['ban', 'id']).format(acum)}"></input>
    <input type="hidden" name="Total-descuento" value="$${new Intl.NumberFormat(['ban', 'id']).format(acum*0.75)}">
    

    <input type="submit" value="Enviar" id="enviar">

    <input type="hidden" name="_next" value="https://woodworkcenter.netlify.app//pages/comprar.html">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_subject" value="Nuevo Pedido">
    <input type="hidden" name="_template" value="box">
</form>
`
form.append(formulario)

// const total = document.createElement('div')
// total.classList.add('Total_pagar')
// total.innerHTML=`
// <p class="total"> Total </p>
// <p class="precio_total">$${suma}</p>
// `
// precios_prod.append(total) 

boton.addEventListener('click',()=>{
    Swal.fire({
        title:'En espera de su pago ',
        icon:'info',
        iconColor:'black',
        text:'Transeferencia tiene un 5% de descuento y efectivo un 25% de descuento',
        showDenyButton:true,
        denyButtonText: `Efectivo`,
        confirmButtonText: 'Transferencia',
        confirmButtonColor: 'black',
        denyButtonColor:'black',
    }).then((res)=>{
        if(res.isConfirmed == true){
            Swal.fire({
                title:'Transferencia',
                icon:'info',
                iconColor:'gray',
                html:'<p> Podes hacer transferencia o deposito a la siguiente cuenta</p>'+ '<p><strong>Nombre del banco</strong>: Banco Provincia</p>'+'<p><strong>CBU</strong>: 0140079303502051605966 </p>'+'<strong>Alias</strong>: BODA.PIPA.OVEJA '+ '<p><strong>Titular</strong>: Cristian Joel Rodriguez Tesen</p>'+'<p><strong>DNI</strong>: 95.144.559</p>'+'<p><strong>Numero de cuenta:</strong> 520-516059/6</p>'+'<hr>'+'<p><strong>Una vez hecho la transferencia o deposito, debera enviar el comprobante y foto del pedido al email: woodworkcenter@gmail.com </strong></p>'+'<hr>'+'<strong>MONTO TOTAL: '+'$'+new Intl.NumberFormat(['ban', 'id']).format(acum*0.95) + '</strong>',
                confirmButtonColor: 'black',
            })   
        } else if(res.isDenied == true){
            form.classList.toggle('form_enviar-activo')

        } else {
            return
        }
    })
})

