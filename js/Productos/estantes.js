const contenedor_estantes = document.querySelector(".producto")
let Productos = JSON.parse(localStorage.getItem("Productos"))

for (const prod of Productos){
    if (prod.tipo == "estante"){
        if(prod.visibilidad==true){
        const div = document.createElement("div")
        div.classList.add ("prod")
        div.innerHTML=`
            <a href="../prod/estantes/estante_${prod.id}.html" class="link">
            <img src="../../img/estantes/estante_${prod.id}.jpg" class="img">
            <p class="nombre">${prod.nombre}</p>
            <p class="precio">$${new Intl.NumberFormat(['ban', 'id']).format(prod.precio)} </p>
        `   
        contenedor_estantes.append(div)
        }else{
            continue
        }
    }
}