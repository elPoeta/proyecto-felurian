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

class Productos{
    add(productos){
        if( this.datos === undefined ){
          this.datos = [];
        }
        this.datos = productos;  
      }
    viewProductos(idPanel){
        let productos = this.datos;
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
           
            lupaEventos();
            
    }
}

function lupaEventos(){
    let zonaLupa = document.querySelectorAll('.zona-lupa');
    let imgCard = document.querySelectorAll('.img-card');
    for (let i = 0; i < imgCard.length; i++) {
      imgCard[i].addEventListener('mouseenter', ()=> {
        let id = imgCard[i].getAttribute('id');
        zoom(id, 3);
      });
    
    }
    removerLupa(zonaLupa);
}

function  cargarProductos(){
    const vista = new Productos();
    vista.add(productos);
    vista.viewProductos('#panel-content');
  }



  function zoom(imgID, zoom) {
    let img, glass, w, h, bw;
    img = document.querySelector('#'+imgID);

  
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    glass.setAttribute("id", "lupa");
   
    img.parentElement.insertBefore(glass, img);

    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
  
   
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
  

    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      let pos, x, y;
   
      e.preventDefault();
    
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
     
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}

      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
  
    function getCursorPos(e) {
      let a, x = 0, y = 0;
      e = e || window.event;
   
      a = img.getBoundingClientRect();
    
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }


function removerLupa(zonaLupa){
if(zonaLupa !== undefined){
for (let i = 0; i < zonaLupa.length; i++) {
zonaLupa[i].addEventListener('mouseleave', ()=>{
    lupa = document.querySelector('#lupa')
    if(lupa !== null){
        let parent = lupa.parentElement;
        parent.removeChild(lupa);
    }
});
}
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

    {
        "id": 3,
        "nombre" : "Vino Tinto 2",
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
        "id": 4,
        "nombre" : "Vino Blanco 2",
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
        "id": 5,
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
        "id": 6,
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
        "id": 7,
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
        "id": 8,
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
        "id": 9,
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
        "id": 10,
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
        "id": 11,
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
        "id": 12,
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
        "id": 13,
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
        "id": 14,
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
        "id": 15,
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
        "id": 16,
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
