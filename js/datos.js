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