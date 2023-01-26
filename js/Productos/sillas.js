const contenedor_sillas = document.querySelector(".producto")
let Productos = JSON.parse(localStorage.getItem("Productos"))

for (const prod of Productos){
    if (prod.tipo == "silla"){
        if(prod.visibilidad==true){
        const div = document.createElement("div")
        div.classList.add ("prod")
        div.innerHTML=`
            <a href="../prod/sillas/silla_${prod.id}.html" class="link">
            <img src="../../img/sillas/silla_${prod.id}.jpg" class="img">
            <p class="nombre">${prod.nombre}</p>
            <p class="precio">$${new Intl.NumberFormat(['ban', 'id']).format(prod.precio)} </p>
        `   
        contenedor_sillas.append(div)
        }else{
            continue
        }
    }
}