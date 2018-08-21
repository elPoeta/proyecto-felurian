class Menu{
    viewMenu(idPanel){
      
        let template =  categorias.map( categoria =>
                    `<li><a href="#">${categoria.nombre}</a>
                        <ul class="hide-menu">
                          <li><a href="#" class="categoria" id="cat-id-${categoria.id}">Todos</a>
                          ${categoria.subCategorias.map( sub =>
                           `<li><a href="#" onclick=buscarPorSubCategoria(${sub.id});>${sub.nombre}</a></li>`
                        ).join('')}</ul></li>`
                     ).join('');
                     
        document.querySelector(idPanel).innerHTML = template;
                     menuEventos();
      }
      
}


let m = new Menu;
m.viewMenu('#panel-side-menu');
m.viewMenu('#menu-template');

function menuEventos(){
    let categoria = document.querySelectorAll('.categoria');
                     for (let i = 0; i < categoria.length; i++) {
                        categoria[i].addEventListener('touchstart', ()=> {
                            eventoBuscar(categoria, i);
                        });
                        categoria[i].addEventListener('click', ()=> {
                            eventoBuscar(categoria,i);
                        });
                      }

}

function eventoBuscar(categoria, i){
    let id = categoria[i].getAttribute('id');
    id = id.replace(/\D/g,'');
    buscarPorCategoria(id);
  }

function buscarPorCategoria(id){
    if(id == 1){
      cargarProductos();
    }
}

const btnNavIcon = document.querySelector('#nav-icon-hamburger');
const btnNavPanel = document.querySelector('#btn-nav-panel'); 

btnNavIcon.addEventListener('touchstart', (e)=>{
    e.preventDefault();
    document.querySelector('.nav-panel').style.width='250px';
});

btnNavPanel.addEventListener('touchstart', (e)=>{
    e.preventDefault();
    document.querySelector('.nav-panel').style.width='0px';
});