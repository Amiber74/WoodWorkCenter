const contenedor_comodas = document.querySelector(".producto")
let Productos = JSON.parse(localStorage.getItem("Productos"))

for (const prod of Productos){
    if (prod.tipo == "comoda"){
        if(prod.visibilidad==true){
        const div = document.createElement("div")
        div.classList.add ("prod")
        div.innerHTML=`
            <a href="../prod/comodas/comoda_${prod.id}.html" class="link">
            <img src="../../img/comodas/comoda_${prod.id}.jpg" class="img">
            <p class="nombre">${prod.nombre}</p>
            <p class="precio">$${new Intl.NumberFormat(['ban', 'id']).format(prod.precio)} </p>
        `   
        contenedor_comodas.append(div)
        }else{
            continue
        }
    }
}