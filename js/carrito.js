const cartCantidad = document.querySelector('#carrito-cantidad');
const carrito = document.querySelector('.carrito-img');
let carritoDeCompras = [];
let cantidad =0;

carrito.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(cantidad);
});

function agregarProductoACarrito(id){
  cartCantidad.textContent=++cantidad;
 console.log(`id >${id}`);

}
