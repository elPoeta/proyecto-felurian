const cartCantidad = document.querySelector('#cantidadEnCarritoCompras');
const carrito = document.querySelector('.carrito-logo');
const panelCarrito = document.querySelector('#panel-carrito');
const totalCarrito = document.querySelector('#total-carrito');
let total =0;
let carritoDeCompras;
let cantidad =0;
const  panel = document.querySelector('.panel-carrito');
carrito.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(cantidad);
   console.log(panel);
   if(panel.classList.contains('hide-panel')){
    panel.classList.remove('hide-panel');
}
else{
    panel.classList.add('hide-panel');
}
   
});

function agregarProductoACarrito(id){
  cartCantidad.textContent=++cantidad;   
  console.log(productos[id]);
  guardarProductosEnCarrito(productos[id]);
  console.log(JSON.parse(sessionStorage.getItem("carrito")));

}

function guardarProductosEnCarrito(producto){
        let compras = {};
       carritoDeCompras =  sessionStorage.getItem("carrito");
        
        if ( carritoDeCompras === null ){
          carritoDeCompras = '[]';
        }
        
        let listaCompras = JSON.parse( carritoDeCompras ); 
      
        //compras.id = listaCompras.length;
        compras.producto= producto;

        console.log('items>> ',compras);
       
        listaCompras.push( compras );  
        sessionStorage.setItem( "carrito", JSON.stringify( listaCompras ));
        agregarProductoAlPanel(producto);

}

function agregarProductoAlPanel(producto) {
  const li = document.createElement('li');
  const hr = document.createElement('hr');
  li.className = 'lista-panel-carrito';
 // li.appendChild(document.createTextNode(tarea.value));
  const img = document.createElement('img');
  img.className = 'img-panel-carrito';
  img.src = `${producto.imagen}`;
  li.appendChild(img);
  
  const h5 = document.createElement('h5');
  h5.className ='nombreProducto-panel-carrito';
  //h5.appendChild(document.createTextNode(`${producto.nombre}  $${producto.precio}`));
  h5.innerHTML = `${producto.nombre} &nbsp;<span class="simboloMoneda-panel-carrito">$</span>${producto.precio}`;
  li.appendChild(h5);
  const input = document.createElement('input');
  input.className = 'spinner-panel-carrito';
  input.setAttribute('id', `rango-${producto.id}`);
  input.setAttribute('type', 'number');
  input.setAttribute('name','quantity');
  input.setAttribute('min','1');
  input.setAttribute('max','15');
  input.setAttribute('value','1');
  li.appendChild(input);

  const linkAgregar = document.createElement('a');
  linkAgregar.className = 'cambiarCantidad-panel-carrito';
  linkAgregar.setAttribute('id', `addcart-${producto.id}`);
  linkAgregar.innerHTML = '&#10004;';
  li.appendChild(linkAgregar);
  
  const linkEliminar = document.createElement('a');
  linkEliminar.className = 'eliminarProducto-panel-carrito';
  linkEliminar.setAttribute('id', `delcart-${producto.id}`);
  linkEliminar.innerHTML = '&times;';
  li.appendChild(linkEliminar);

  panelCarrito.appendChild(li);
  panelCarrito.appendChild(hr);
  total+= producto.precio;
  totalCarrito.innerText = total;
  
}

