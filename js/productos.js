class Productos{
  
    viewProductos(idPanel){
        let template =  `<section class="contenedor-productos text-center">
                         ${productos.map((producto, index) =>
           `<div class="card">
            <div class="zona-lupa">
              <img src="${producto.imagen}" class="img-card" id="img-${producto.id}">
            </div>
            <h2 class="titulo-card">${producto.nombre}</h2>
            <h3 class="precio-card">$ ${producto.precio}</h3>
            <hr>
            <button class="btn-agregar" onclick="agregarProductoACarrito(${index})">Agregar</button>
            </div>`).join('')}</section>`;  
            
            document.querySelector(idPanel).innerHTML = template;
 
            Lupa.lupaEventos();
            
    }
}

function  cargarProductos(){
    const vista = new Productos();
   
    vista.viewProductos('#panel-content');
  }
