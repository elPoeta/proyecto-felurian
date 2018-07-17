const cartCantidad = document.querySelector('#cantidadEnCarrito');
const carrito = document.querySelector('.carrito-logo');
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
      
        compras.id = listaCompras.length;
        compras.producto= producto;

        console.log('items>> ',compras);
       
        listaCompras.push( compras );  
        sessionStorage.setItem( "carrito", JSON.stringify( listaCompras ));
}
