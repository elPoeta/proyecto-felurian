class Menu{
    viewMenu(idPanel){
        let categorias = this.datos;
        let template =  categorias.map( categoria =>
                    `<li><a href="${categoria.id}">${categoria.nombre}</a>
                        <ul class="hide-menu">
                          ${categoria.subCategorias.map( sub =>
                           `<li><a href="${sub.id}">${sub.nombre}</a></li>`
                        ).join('')}</ul></li>`
                     ).join('');
        document.querySelector(idPanel).innerHTML = template;
      }
      add(categoria){
        if( this.datos === undefined ){
          this.datos = [];
        }
        this.datos = categoria;
        
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

let m = new Menu;
m.add(categorias);
m.viewMenu('#panel-side-menu');