
const cont_carrito = JSON.parse(localStorage.getItem("Carrito"))
const Contenedor = document.querySelector('#carrito ul')
const lista_pagar = JSON.parse(localStorage.getItem("Productos-pagar"))


for (const prod of cont_carrito) {
    const li = document.createElement('li')
    li.classList.add('prod')
    li.innerHTML = `
    <img class="imagen" src="${prod.imagen}">
    <p class="nombre">${prod.nombre}</p>
    <p class ="medida">${prod.medidas}</p>
    <input class="tipo" type="hidden" value="${prod.tipo}">
    <input class="id" type="hidden" value="${prod.id}">
    <input class="precio" type="hidden" value="${prod.precio}">
    <div class="cant"> 
    <p> Ingrese la cantidad</p>
    <input type="number" name="cantidad_prod" class="cantidad_prod">
    </div>
    `
    Contenedor.append(li)
}
const button = document.createElement('div')

button.innerHTML=`<a href="http://woodworkcenter.netlify.app/pages/comprar.html"><button>Comprar!</button></a>`
Contenedor.append(button)

let valor_inputs = document.querySelectorAll('.cantidad_prod')
let valor_precio = document.querySelectorAll('.precio')
let valor_nombre = document.querySelectorAll('.nombre')
let valor_tipo = document.querySelectorAll('.tipo')
let valor_img = document.querySelectorAll('.imagen')
let id = document.querySelectorAll('.id')

button.addEventListener('click',()=>{

    localStorage.removeItem("Carrito")


    function Producto (nombre,tipo,imagen,cantidad,valor,valor_total,id){
        this.nombre=nombre;
        this.tipo=tipo;
        this.imagen=imagen;
        this.cantidad=cantidad;
        this.valor=valor;
        this.valor_total=valor_total;
        this.id=id;
    }

    

    for (let i=0; i< valor_inputs.length; i++) {
        if(valor_inputs[i].value === "" || valor_inputs[i].value <= 0){
            continue
        }
        let total = valor_precio[i].value * valor_inputs[i].value
        lista_pagar.push(new Producto(valor_nombre[i].textContent,valor_tipo[i].value,valor_img[i].src,valor_inputs[i].value,valor_precio[i].value, total,id[i].value))
        localStorage.setItem("Productos-pagar", JSON.stringify(lista_pagar))
    }
})



