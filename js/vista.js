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
                    `<li><a href="#" onclick=buscarPorCategoria(${categoria.id});>${categoria.nombre}</a>
                        <ul class="hide-menu">
                          ${categoria.subCategorias.map( sub =>
                           `<li><a href="#" onclick=buscarPorSubCategoria(${sub.id});>${sub.nombre}</a></li>`
                        ).join('')}</ul></li>`
                     ).join('');
        document.querySelector(idPanel).innerHTML = template;
      }
      
}

class Categoria{
    add(productos){
        if( this.datos === undefined ){
          this.datos = [];
        }
        this.datos = productos;  
      }
    viewProductos(id, idPanel){
        let productos = this.datos;
        let template =  `<section class="contenedor-productos text-center">
                         ${productos.map(producto =>
           `<div class="card">
              <img src="${producto.imagen}" class="img-card">
          
            <h2 class="titulo-card">${producto.nombre}</h2>
            <h3 class="precio-card">$ ${producto.precio}</h3>
            <hr>
            <button id="btn-agregar" onclick=agregarProdutoACarrito(${producto.id});><i class="fas fa-cart-plus"> </i>Agregar</button>
            </div>`).join('')}</section>`;    
            document.querySelector(idPanel).innerHTML = template;
        
    }
}
const categorias = [
    {
        "id": 1,
        "nombre" : "Vinos",
        "subCategorias":[
            {
                "id": 1,
                "nombre":"Tintos"
            },
            {
                "id": 2,
                "nombre":"Blancos"  
            },
            {
                "id": 3,
                "nombre":"Rosados"
            },
            {
                "id": 4,
                "nombre":"Dulces"
            },
            {
                "id": 5,
                "nombre":"Blend"
            },
            {
                "id": 6,
                "nombre":"Estuches"
            }    
      ]
    },
    {
        "id": 2,
        "nombre" : "Delicatessen",
        "subCategorias":[
            {
                "id": 7,
                "nombre":"Aceites"
            },
            {
                "id":8,
                "nombre":"Dulces"  
            },
            {
                "id": 9,
                "nombre":"Salados"
            }
        ]   
    },
    {
        "id": 3,
        "nombre" : "Accesorios",
        "subCategorias":[
            {
                "id": 10,
                "nombre":"Cristaleria"
            },
            {
                "id":11,
                "nombre":"Cavas"  
            },
            {
                "id": 12,
                "nombre":"Otros"
            }
        ]
    }
];

const productos = [
    {
        "id": 1,
        "nombre" : "Vino Tinto 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 1,
                            "nombre":"Tintos"
                        }
            },
        "imagen":"img/tinto.png",
        "precio":124    
    },
    {
        "id": 2,
        "nombre" : "Vino Blanco 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 2,
                            "nombre":"Blancos"
                        }
            },
        "imagen":"img/blanco.png",
        "precio":102    
    },
    ////////////////////////////////////////////////////////////////////////

    {
        "id": 1,
        "nombre" : "Vino Tinto 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 1,
                            "nombre":"Tintos"
                        }
            },
        "imagen":"img/tinto.png",
        "precio":124    
    },
    {
        "id": 2,
        "nombre" : "Vino Blanco 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 2,
                            "nombre":"Blancos"
                        }
            },
        "imagen":"img/blanco.png",
        "precio":102    
    },
    {
        "id": 1,
        "nombre" : "Vino Tinto 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 1,
                            "nombre":"Tintos"
                        }
            },
        "imagen":"img/tinto.png",
        "precio":124    
    },
    {
        "id": 2,
        "nombre" : "Vino Blanco 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 2,
                            "nombre":"Blancos"
                        }
            },
        "imagen":"img/blanco.png",
        "precio":102    
    },
    {
        "id": 1,
        "nombre" : "Vino Tinto 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 1,
                            "nombre":"Tintos"
                        }
            },
        "imagen":"img/tinto.png",
        "precio":124    
    },
    {
        "id": 2,
        "nombre" : "Vino Blanco 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 2,
                            "nombre":"Blancos"
                        }
            },
        "imagen":"img/blanco.png",
        "precio":102    
    },
    {
        "id": 1,
        "nombre" : "Vino Tinto 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 1,
                            "nombre":"Tintos"
                        }
            },
        "imagen":"img/tinto.png",
        "precio":124    
    },
    {
        "id": 2,
        "nombre" : "Vino Blanco 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 2,
                            "nombre":"Blancos"
                        }
            },
        "imagen":"img/blanco.png",
        "precio":102    
    },
    {
        "id": 1,
        "nombre" : "Vino Tinto 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 1,
                            "nombre":"Tintos"
                        }
            },
        "imagen":"img/tinto.png",
        "precio":124    
    },
    {
        "id": 2,
        "nombre" : "Vino Blanco 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 2,
                            "nombre":"Blancos"
                        }
            },
        "imagen":"img/blanco.png",
        "precio":102    
    },
    {
        "id": 1,
        "nombre" : "Vino Tinto 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 1,
                            "nombre":"Tintos"
                        }
            },
        "imagen":"img/tinto.png",
        "precio":124    
    },
    {
        "id": 2,
        "nombre" : "Vino Blanco 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 2,
                            "nombre":"Blancos"
                        }
            },
        "imagen":"img/blanco.png",
        "precio":102    
    },
    {
        "id": 1,
        "nombre" : "Vino Tinto 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 1,
                            "nombre":"Tintos"
                        }
            },
        "imagen":"img/tinto.png",
        "precio":124    
    },
    {
        "id": 2,
        "nombre" : "Vino Blanco 1",
        "categorias":
            {
                    "id": 1,
                    "nombre" : "Vinos",
                    "subCategorias":
                        {
                            "id": 2,
                            "nombre":"Blancos"
                        }
            },
        "imagen":"img/blanco.png",
        "precio":102    
    }
];

let m = new Menu;
m.add(categorias);
m.viewMenu('#panel-side-menu');
m.viewMenu('#menu-large');

function buscarPorCategoria(id){
    const vista = new Categoria();
    vista.add(productos);
    vista.viewProductos(id, '#panel-content');
  }
