const cartCantidad = document.querySelector('#carrito-cantidad');
const carrito = document.querySelector('.carrito-img');
let carritoDeCompras;
let cantidad =0;

carrito.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(cantidad);
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
