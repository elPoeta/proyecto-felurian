const cartCantidad = document.querySelector('#cantidadEnCarritoCompras');
const carrito = document.querySelector('.carrito-logo');
const panelCarrito = document.querySelector('#panel-carrito');
const totalCarrito = document.querySelector('#total-carrito');
const  panel = document.querySelectorAll('.panel-carroCompras');
const  btnFinalizarCompra = document.querySelector('#btn-Comprar');
const carritoVacio = document.querySelector('#carritoVacio');
let carritoDeComprasSession =[];
let compras={};
compras.productos=[] ;
compras.total = 0;
compras.items = 0;
let  listaCompras;


carrito.addEventListener('click', (e)=>{
    e.preventDefault();
    let i;
    if(compras.total == 0){
         i = 0;
        panelCarritoVacio();
       
    }else{
        i=1;
      panelCarritoLleno();
    }

  if(panel[i].classList.contains('hide-panel')){
       
    panel[i].classList.remove('hide-panel');
  }
   else{
     panel[i].classList.add('hide-panel');
  
 }
   
 });

function agregarProductoACarrito(id){
  agregarItem(productos[id]);

}

function guardarProductosEnCarrito(producto){
     
       carritoDeComprasSession =  sessionStorage.getItem("carrito");
        
        if ( carritoDeComprasSession === null ){
          carritoDeComprasSession = '[]';
        }
        
       listaCompras = JSON.parse( carritoDeComprasSession );

        producto.cantidad = 1;
        compras.total += producto.precio;
        compras.items += 1;
        compras.productos = producto;

        listaCompras.push( compras );  
        sessionStorage.setItem( "carrito", JSON.stringify( listaCompras ));
      
        agregarProductoAlPanel(producto);
}
function panelCarritoVacio(){
    document.querySelector('.total-panel-carrito').style.visibility = "hidden";
    btnFinalizarCompra.style.visibility = "hidden";
    panel[1].classList.add('hide-panel');
    panel[0].style.height = "65px";
}
function panelCarritoLleno(){
    document.querySelector('.total-panel-carrito').style.visibility = "visible";
    btnFinalizarCompra.style.visibility = "visible";
    panel[0].classList.add('hide-panel');
}
function agregarProductoAlPanel(producto) {
  const li = document.createElement('li');
  const hr = document.createElement('hr');
  hr.setAttribute('id', `hr-${producto.id}`);

  li.className = 'lista-panel-carrito';
  
  const img = document.createElement('img');
  img.className = 'img-panel-carrito';
  img.src = `${producto.imagen}`;
  li.appendChild(img);
  
  const h5 = document.createElement('h5');
  h5.className ='nombreProducto-panel-carrito';
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
  
  panel[0].classList.add('hide-panel');
  
  panelCarrito.appendChild(li);
  panelCarrito.appendChild(hr);

  
  let spinner = document.querySelector(`#rango-${producto.id}`);
  let quitarProducto = document.querySelector(`#delcart-${producto.id}`);  
  spinner.addEventListener('change', ()=>{
    
        let addCart = document.querySelector(`#addcart-${producto.id}`);
        addCart.addEventListener('click', ()=>{
            
            for (let i=0; i< listaCompras.length; i++) {
               
                if (listaCompras[i].productos.id == producto.id) {
                 
                    compras.total -= listaCompras[i].productos.cantidad * producto.precio; 
                    compras.items -= listaCompras[i].productos.cantidad;
                  
                    listaCompras[i].productos.cantidad = Number(spinner.value);
                    compras.total += listaCompras[i].productos.cantidad * producto.precio;
                    compras.items += listaCompras[i].productos.cantidad;
                  
                    break;
                }
            }
            updatePanel();
                
        });
  });

  quitarProducto.addEventListener('click', (e)=>{
    
    for (let i=0; i< listaCompras.length; i++) {
               
        if (listaCompras[i].productos.id == producto.id) {

            compras.total -= listaCompras[i].productos.cantidad * producto.precio; 
            compras.items -= listaCompras[i].productos.cantidad;
           
          if (e.target.className ==='eliminarProducto-panel-carrito') {
                e.target.parentElement.remove();
                document.querySelector(`#hr-${producto.id}`).remove(); 
            }

            borrarItem(producto.id)
           
            break;
        }
    }
    updatePanel();
  });
}

function agregarItem(producto){
 let nuevoItem = true;
 listaCompras = JSON.parse(sessionStorage.getItem("carrito"));
 
if(listaCompras != null && listaCompras !='[]'){
  for (let i=0; i < listaCompras.length; i++) {
   
      if (listaCompras[i].productos.id == producto.id) {
          nuevoItem = false;
          break;
      }
  }
 } 
  if (nuevoItem) {  
    guardarProductosEnCarrito(producto);
  }
 updatePanel();
} 

function updatePanel(){
    cartCantidad.innerHTML = compras.items 
    totalCarrito.innerText = compras.total;
    sessionStorage.setItem('carrito', JSON.stringify(listaCompras));
}

function borrarItem(id){
         listaCompras = JSON.parse(sessionStorage.getItem('carrito'));
     
       for(let i=0; i < listaCompras.length; i++){
        if (listaCompras[i].productos.id == id) {
            listaCompras.splice(i, 1);
        }
       }
       
        sessionStorage.setItem('carrito', JSON.stringify(listaCompras));
        if(compras.total == 0){
            panelCarritoVacio();
        }
    }
