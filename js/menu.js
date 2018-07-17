class Menu{
    add(categoria){
        if( this.datos === undefined ){
          this.datos = [];
        }
        this.datos = categoria;
        
      }

    viewMenu(idPanel){
        let categorias = this.datos;
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
m.add(categorias);
//m.viewMenu('#panel-side-menu');
m.viewMenu('#menu-template');

function menuEventos(){
    let categoria = document.querySelectorAll('.categoria');
                     for (let i = 0; i < categoria.length; i++) {
                        categoria[i].addEventListener('touchstart', ()=> {
                            let id = categoria[i].getAttribute('id');
                            id = id.replace(/\D/g,'');
                            buscarPorCategoria(id);
                        });
                      
                      }
}