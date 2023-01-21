const contenedor_armarios = document.querySelector(".producto")
let Productos = JSON.parse(localStorage.getItem("Productos"))

for (const prod of Productos){
    if (prod.tipo == "armario"){
        const div = document.createElement("div")
        div.classList.add ("prod")
        div.innerHTML=`
            <a href="../prod/armarios/armario_${prod.id}.html" class="link">
            <img src="../../img/armario/armario_${prod.id}.jpg" class="img">
            <p class="nombre">${prod.nombre}</p>
            <p class="precio">$${new Intl.NumberFormat(['ban', 'id']).format(prod.precio)} </p>
            
        `   
        contenedor_armarios.append(div)
    }
}