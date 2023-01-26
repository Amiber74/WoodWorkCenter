const contenedor_mesas_luz = document.querySelector(".producto")
let Productos = JSON.parse(localStorage.getItem("Productos"))

for (const prod of Productos){
    if (prod.tipo == "mesa de luz"){
        if(prod.visibilidad==true){
        const div = document.createElement("div")
        div.classList.add ("prod")
        div.innerHTML=`
            <a href="../prod/mesa_luz/mesa-luz_${prod.id}.html" class="link">
            <img src="../../img/mesas_de_luz/mesa_de_luz-${prod.id}.jpg" class="img">
            <p class="nombre">${prod.nombre}</p>
            <p class="precio">$${new Intl.NumberFormat(['ban', 'id']).format(prod.precio)} </p>
        `   
        contenedor_mesas_luz.append(div)
        }else{
            continue
        }
    }
}
