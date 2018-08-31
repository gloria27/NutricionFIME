import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alimentos',
  templateUrl: './lista-alimentos.component.html',
  styleUrls: ['./lista-alimentos.component.css']
})
export class ListaAlimentosComponent implements OnInit {

  lista = [
    {
      columnas: [
        "Cereales y derivados",
        "Valor energético (kcal.)",
      ],
      registros: [
        {
          alimento: "Arroz blanco",
          calorias: "354"
        },
        {
          alimento: "Arroz integral",
          calorias: "350"
        },
        {
          alimento: "Avena",
          calorias: "367"
        },
        {
          alimento: "Cebada",
          calorias: "373"
        },
        {
          alimento: "Centeno",
          calorias: "350"
        },
        {
          alimento: "Cereales con chocolate",
          calorias: "358"
        },
        {
          alimento: "Cereales con miel",
          calorias: "386"
        },
        {
          alimento: "Copos de maíz",
          calorias: "350"
        },
        {
          alimento: "Harina de maíz",
          calorias: "349"
        },
        {
          alimento: "Harina de trigo integral",
          calorias: "340"
        },
        {
          alimento: "Harina de trigo refinada",
          calorias: "353"
        },
        {
          alimento: "Pan de centeno",
          calorias: "241"
        },
        {
          alimento: "Pan de trigo blanco",
          calorias: "255"
        },
        {
          alimento: "Pan de trigo integral",
          calorias: "239"
        },
        {
          alimento: "Pan de trigo molde blanco",
          calorias: "233"
        },
        {
          alimento: "Pan de trigo molde integral",
          calorias: "216"
        },
        {
          alimento: "Pasta al huevo",
          calorias: "368"
        },
        {
          alimento: "Pasta de sémola",
          calorias: "361"
        },
        {
          alimento: "Polenta",
          calorias: "358"
        },
        {
          alimento: "Sémola de trigo",
          calorias: "368"
        },
        {
          alimento: "Yuca",
          calorias: "338"
        }


      ]
    },
    {
      columnas: [
        "Legumbres",
        "Valor energético (kcal.)",
      ],
      registros: [
        {
          alimento: "Arvejas secas",
          calorias: "340"
        },
        {
          alimento: "Garbanzos",
          calorias: "361"
        },
        {
          alimento: "Habas secas",
          calorias: "343"
        },
        {
          alimento: "Lentejas",
          calorias: "336"
        },
        {
          alimento: "Poroto",
          calorias: "316"
        },
        {
          alimento: "Soja en grano",
          calorias: "422"
        }

      ]
    },
    {
      columnas: [
        "Huevos",
        "Valor energético (kcal.)",
      ],
      registros: [
        {
          alimento: "Clara",
          calorias: "48"
        },
        {
          alimento: "Huevo duro",
          calorias: "147"
        },
        {
          alimento: "Huevo entero",
          calorias: "162"
        },
        {
          alimento: "Yema",
          calorias: "368"
        }
      ]
    },
    {
      columnas: [
        "Pastelería",
        "Valor energético (kcal.)",
      ],
      registros: [
        {
          alimento: "Bizcocho",
          calorias: "456"
        },
        {
          alimento: "Croissant chocolate",
          calorias: "469"
        },
        {
          alimento: "Croissant, donut",
          calorias: "456"
        },
        {
          alimento: "Galletas de chocolate",
          calorias: "524"
        },
        {
          alimento: "Galletas de mantequilla tipo Danesas",
          calorias: "397"
        },
        {
          alimento: "Galletas saladas",
          calorias: "464"
        },
        {
          alimento: "Magdalenas",
          calorias: "469"
        },
        {
          alimento: "Pasta de hojaldre cocida",
          calorias: "565"
        },
        {
          alimento: "Pastel de manzana",
          calorias: "311"
        },
        {
          alimento: "Pastel de manzana, masa hojaldre",
          calorias: "456"
        },
        {
          alimento: "Pastel de queso",
          calorias: "414"
        }
      ]
    },
    {
      columnas: [
        "Azúcares y dulces",
        "Valor energético (kcal.)",
      ],
      registros: [
        {
          alimento: "Azúcar",
          calorias: "380"
        },
        {
          alimento: "Cacao en polvo con azúcar instantáneo",
          calorias: "366"
        },
        {
          alimento: "Caramelos",
          calorias: "378"
        },
        {
          alimento: "Chocolate con leche",
          calorias: "550"
        },
        {
          alimento: "Chocolate sin leche",
          calorias: "530"
        },
        {
          alimento: "Crema chocolate con avellanas",
          calorias: "549"
        },
        {
          alimento: "Dulce de membrillo",
          calorias: "215"
        },
        {
          alimento: "Gomas de fruta",
          calorias: "172"
        },
        {
          alimento: "Helados de agua",
          calorias: "139"
        },
        {
          alimento: "Mermeladas con azúcar",
          calorias: "280"
        },
        {
          alimento: "Mermeladas sin azúcar",
          calorias: "145"
        },
        {
          alimento: "Miel",
          calorias: "300"
        }
      ]
    },
    {
      columnas: [
        "Verduras y hortalizas",
        "Valor energético (kcal.)",
      ],
      registros: [
        {
          alimento: "Aceitunas negras",
          calorias: "349"
        },
        {
          alimento: "Aceitunas verdes",
          calorias: "132"
        },
        {
          alimento: "Acelgas",
          calorias: "33"
        },
        {
          alimento: "Ajos",
          calorias: "169"
        },
        {
          alimento: "Alcachofas",
          calorias: "64"
        },
        {
          alimento: "Apio",
          calorias: "20"
        },
        {
          alimento: "Arvejas",
          calorias: "78"
        },
        {
          alimento: "Arvejas congeladas",
          calorias: "71"
        },
        {
          alimento: "Berenjena",
          calorias: "29"
        },
        {
          alimento: "Berros",
          calorias: "21"
        },
        {
          alimento: "Brócoli",
          calorias: "31"
        },
        {
          alimento: "Calabacín",
          calorias: "31"
        },
        {
          alimento: "Calabaza",
          calorias: "24"
        },
        {
          alimento: "Cebolla",
          calorias: "47"
        },
        {
          alimento: "Cebolla tierna",
          calorias: "39"
        },
        {
          alimento: "Champiñón y otras cetas",
          calorias: "28"
        },
        {
          alimento: "Choclo",
          calorias: "96"
        },
        {
          alimento: "Cochayuyo",
          calorias: "50"
        },
        {
          alimento: "Col",
          calorias: "28"
        },
        {
          alimento: "Col de Bruselas",
          calorias: "54"
        },
        {
          alimento: "Coliflor",
          calorias: "30"
        },
        {
          alimento: "Endibia",
          calorias: "22"
        },
        {
          alimento: "Escarola",
          calorias: "37"
        },
        {
          alimento: "Espárragos",
          calorias: "26"
        },
        {
          alimento: "Espárragos en lata",
          calorias: "24"
        },
        {
          alimento: "Espinaca",
          calorias: "32"
        },
        {
          alimento: "Espinacas congeladas",
          calorias: "25"
        },
        {
          alimento: "Habas tiernas",
          calorias: "64"
        },
        {
          alimento: "Hinojo",
          calorias: "16"
        },
        {
          alimento: "Lechuga",
          calorias: "18"
        },
        {
          alimento: "Maíz dulce en conserva",
          calorias: "50"
        },
        {
          alimento: "Nabos",
          calorias: "29"
        },
        {
          alimento: "Papas cocidas",
          calorias: "86"
        },
        {
          alimento: "Pepino",
          calorias: "12"
        },
        {
          alimento: "Perejil",
          calorias: "55"
        },
        {
          alimento: "Pimiento",
          calorias: "22"
        },
        {
          alimento: "Porotos verdes",
          calorias: "21"
        },
        {
          alimento: "Puerros",
          calorias: "42"
        },
        {
          alimento: "Puré de papas",
          calorias: "357"
        },
        {
          alimento: "Rábanos",
          calorias: "20"
        },
        {
          alimento: "Remolacha",
          calorias: "40"
        },
        {
          alimento: "Repollo",
          calorias: "19"
        },
        {
          alimento: "Rúcula",
          calorias: "37"
        },
        {
          alimento: "Soja",
          calorias: "50"
        },
        {
          alimento: "Tomate triturado en conserva",
          calorias: "39"
        },
        {
          alimento: "Tomates",
          calorias: "22"
        },
        {
          alimento: "Trufa",
          calorias: "92"
        },
        {
          alimento: "Zanahoria",
          calorias: "42"
        },
        {
          alimento: "Zumo de tomate",
          calorias: "21"
        }
      ]
    },
    {
      columnas: [
        "Frutas",
        "Valor energético (kcal.)",
      ],
      registros: [
        {
          alimento: "Arándanos",
          calorias: "41"
        },
        {
          alimento: "Caqui",
          calorias: "64"
        },
        {
          alimento: "Cereza",
          calorias: "47"
        },
        {
          alimento: "Chirimoya",
          calorias: "78"
        },
        {
          alimento: "Ciruela",
          calorias: "44"
        },
        {
          alimento: "Ciruela seca",
          calorias: "290"
        },
        {
          alimento: "Coco",
          calorias: "646"
        },
        {
          alimento: "Damasco",
          calorias: "44"
        },
        {
          alimento: "Dátil",
          calorias: "279"
        },
        {
          alimento: "Dátil seco",
          calorias: "306"
        },
        {
          alimento: "Durazno",
          calorias: "52"
        },
        {
          alimento: "Durazno en almíbar",
          calorias: "84"
        },
        {
          alimento: "Frambuesa",
          calorias: "40"
        },
        {
          alimento: "Fresas",
          calorias: "36"
        },
        {
          alimento: "Granada",
          calorias: "65"
        },
        {
          alimento: "Grosella",
          calorias: "37"
        },
        {
          alimento: "Higos",
          calorias: "80"
        },
        {
          alimento: "Higos secos",
          calorias: "275"
        },
        {
          alimento: "Kiwi",
          calorias: "51"
        },
        {
          alimento: "Limón",
          calorias: "39"
        },
        {
          alimento: "Mandarina",
          calorias: "40"
        },
        {
          alimento: "Mango",
          calorias: "57"
        },
        {
          alimento: "Manzana",
          calorias: "52"
        },
        {
          alimento: "Melón",
          calorias: "31"
        },
        {
          alimento: "Mora",
          calorias: "37"
        },
        {
          alimento: "Naranja",
          calorias: "44"
        },
        {
          alimento: "Nectarina",
          calorias: "64"
        },
        {
          alimento: "Nísperos",
          calorias: "97"
        },
        {
          alimento: "Palta",
          calorias: "167"
        },
        {
          alimento: "Papaya",
          calorias: "45"
        },
        {
          alimento: "Pera",
          calorias: "61"
        },
        {
          alimento: "Piña",
          calorias: "51"
        },
        {
          alimento: "Piña en almíbar",
          calorias: "84"
        },
        {
          alimento: "Plátano",
          calorias: "90"
        },
        {
          alimento: "Pomelo",
          calorias: "30"
        },
        {
          alimento: "Sandía",
          calorias: "30"
        },
        {
          alimento: "Uva",
          calorias: "81"
        },
        {
          alimento: "Uva pasa",
          calorias: "324"
        },
        {
          alimento: "Zumo de fruta",
          calorias: "45"
        },
        {
          alimento: "Zumo de naranja",
          calorias: "42"
        }
      ]
    },
    {
      columnas: [
        "Frutos secos",
        "Valor energético (kcal.)",
      ],
      registros: [
        {
          alimento: "Almendras",
          calorias: "620"
        },
        {
          alimento: "Avellanas",
          calorias: "675"
        },
        {
          alimento: "Castañas",
          calorias: "199"
        },
        {
          alimento: "Maní",
          calorias: "560"
        },
        {
          alimento: "Nueces",
          calorias: "660"
        },
        {
          alimento: "Piñones",
          calorias: "660"
        },
        {
          alimento: "Pistacho",
          calorias: "581"
        }
      ]
    },
    {
      columnas: [
        "Lácteos y derivados",
        "Valor energético (kcal.)",
      ],
      registros: [
        {
          alimento: "Cuajada",
          calorias: "92"
        },
        {
          alimento: "Flan de huevo",
          calorias: "126"
        },
        {
          alimento: "Flan de vainilla",
          calorias: "102"
        },
        {
          alimento: "Helados lácteos",
          calorias: "167"
        },
        {
          alimento: "Leche condensada c/azúcar",
          calorias: "350"
        },
        {
          alimento: "Leche condensada s/azúcar",
          calorias: "160"
        },
        {
          alimento: "Leche de cabra",
          calorias: "72"
        },
        {
          alimento: "Leche de oveja",
          calorias: "96"
        },
        {
          alimento: "Leche descremada",
          calorias: "36"
        },
        {
          alimento: "Leche en polvo descremada",
          calorias: "373"
        },
        {
          alimento: "Leche en polvo entera",
          calorias: "500"
        },
        {
          alimento: "Leche entera",
          calorias: "68"
        },
        {
          alimento: "Leche semi descremada",
          calorias: "49"
        },
        {
          alimento: "Mousse",
          calorias: "177"
        },
        {
          alimento: "Nata o crema de leche",
          calorias: "298"
        },
        {
          alimento: "Queso blanco desnatado",
          calorias: "70"
        },
        {
          alimento: "Queso Brie",
          calorias: "263"
        },
        {
          alimento: "Queso cammembert",
          calorias: "312"
        },
        {
          alimento: "Queso cheddar",
          calorias: "381"
        },
        {
          alimento: "Queso crema",
          calorias: "245"
        },
        {
          alimento: "Queso de bola",
          calorias: "349"
        },
        {
          alimento: "Queso de Burgos",
          calorias: "174"
        },
        {
          alimento: "Queso de oveja",
          calorias: "245"
        },
        {
          alimento: "Queso edam",
          calorias: "306"
        },
        {
          alimento: "Queso emmental",
          calorias: "415"
        },
        {
          alimento: "Queso fundido untable",
          calorias: "285"
        },
        {
          alimento: "Queso gruyere",
          calorias: "391"
        },
        {
          alimento: "Queso manchego",
          calorias: "376"
        },
        {
          alimento: "Queso mozzarella",
          calorias: "245"
        },
        {
          alimento: "Queso parmesano",
          calorias: "393"
        },
        {
          alimento: "Queso ricota",
          calorias: "400"
        },
        {
          alimento: "Queso roquefort",
          calorias: "405"
        },
        {
          alimento: "Requesón",
          calorias: "96"
        },
        {
          alimento: "Yogurt desnatado",
          calorias: "45"
        },
        {
          alimento: "Yogurt desnatado con frutas",
          calorias: "82"
        },
        {
          alimento: "Yogurt enriquecido con nata",
          calorias: "65"
        },
        {
          alimento: "Yogurt natural",
          calorias: "62"
        },
        {
          alimento: "Yogurt natural con fruta",
          calorias: "100"
        }
      ]
    },
    {
      columnas: [
        "Carnes, caza y embutidos",
        "Valor energético (kcal.)",
      ],
      registros: [
        {
          alimento: "Bacon (Panceta ahumada)",
          calorias: "665"
        },
        {
          alimento: "Butifarra cocida",
          calorias: "390"
        },
        {
          alimento: "Butifarra, salchicha fresca",
          calorias: "326"
        },
        {
          alimento: "Cabrito",
          calorias: "127"
        },
        {
          alimento: "Cerdo, chuleta",
          calorias: "330"
        },
        {
          alimento: "Cerdo, hígado",
          calorias: "153"
        },
        {
          alimento: "Cerdo, lomo",
          calorias: "208"
        },
        {
          alimento: "Charqui",
          calorias: "110"
        },
        {
          alimento: "Chicharrón",
          calorias: "601"
        },
        {
          alimento: "Chorizo",
          calorias: "468"
        },
        {
          alimento: "Ciervo",
          calorias: "120"
        },
        {
          alimento: "Codorniz y perdiz",
          calorias: "114"
        },
        {
          alimento: "Conejo, liebre",
          calorias: "162"
        },
        {
          alimento: "Cordero lechón",
          calorias: "105"
        },
        {
          alimento: "Cordero pierna",
          calorias: "98"
        },
        {
          alimento: "Cordero, costillas",
          calorias: "215"
        },
        {
          alimento: "Cordero, hígado",
          calorias: "132"
        },
        {
          alimento: "Faisán",
          calorias: "144"
        },
        {
          alimento: "Foie-Gras",
          calorias: "518"
        },
        {
          alimento: "Gallina",
          calorias: "369"
        },
        {
          alimento: "Hamburguesa",
          calorias: "230"
        },
        {
          alimento: "Jabalí",
          calorias: "107"
        },
        {
          alimento: "Jamón",
          calorias: "380"
        },
        {
          alimento: "Jamón cocido",
          calorias: "126"
        },
        {
          alimento: "Jamón York",
          calorias: "289"
        },
        {
          alimento: "Lengua de vaca",
          calorias: "191"
        },
        {
          alimento: "Lomo embuchado",
          calorias: "380"
        },
        {
          alimento: "Mortadela",
          calorias: "265"
        },
        {
          alimento: "Pato",
          calorias: "200"
        },
        {
          alimento: "Pavo, muslo",
          calorias: "186"
        },
        {
          alimento: "Pato, pechuga",
          calorias: "134"
        },
        {
          alimento: "Salamín",
          calorias: "325"
        },
        {
          alimento: "Salchicha Frankfurt",
          calorias: "315"
        },
        {
          alimento: "Salchichón",
          calorias: "294"
        },
        {
          alimento: "Ternera, bistec",
          calorias: "181"
        },
        {
          alimento: "Ternera, chuleta",
          calorias: "168"
        },
        {
          alimento: "Ternera, hígado",
          calorias: "140"
        },
        {
          alimento: "Ternera, riñón",
          calorias: "86"
        },
        {
          alimento: "Ternera, sesos",
          calorias: "125"
        },
        {
          alimento: "Ternera, solomillo",
          calorias: "290"
        },
        {
          alimento: "Tira de asado",
          calorias: "401"
        },
        {
          alimento: "Tripas",
          calorias: "100"
        },
        {
          alimento: "Vacuno, Hígado",
          calorias: "129"
        }
      ]
    },
    {
      columnas: [
        "Pescados, mariscos y crustáceos",
        "Valor energético (kcal.)",
      ],
      registros: [
        {
          alimento: "Almejas",
          calorias: "50"
        },
        {
          alimento: "Anchoas",
          calorias: "175"
        },
        {
          alimento: "Anguilas",
          calorias: "200"
        },
        {
          alimento: "Areque ahumado",
          calorias: "209"
        },
        {
          alimento: "Atún en lata con aceite vegetal",
          calorias: "280"
        },
        {
          alimento: "Atún en lata con agua",
          calorias: "127"
        },
        {
          alimento: "Atún fresco",
          calorias: "225"
        },
        {
          alimento: "Bacalao fresco",
          calorias: "74"
        },
        {
          alimento: "Bacalao salado remojado",
          calorias: "108"
        },
        {
          alimento: "Bacalao seco",
          calorias: "322"
        },
        {
          alimento: "Besugo",
          calorias: "118"
        },
        {
          alimento: "Caballa",
          calorias: "153"
        },
        {
          alimento: "Calamar",
          calorias: "82"
        },
        {
          alimento: "Cangrejo",
          calorias: "85"
        },
        {
          alimento: "Caviar",
          calorias: "233"
        },
        {
          alimento: "Congrio",
          calorias: "112"
        },
        {
          alimento: "Dorada",
          calorias: "80"
        },
        {
          alimento: "Gallo",
          calorias: "73"
        },
        {
          alimento: "Gambas",
          calorias: "96"
        },
        {
          alimento: "Kani-Kama",
          calorias: "80"
        },
        {
          alimento: "Langosta",
          calorias: "67"
        },
        {
          alimento: "Langostino",
          calorias: "96"
        },
        {
          alimento: "Lenguado",
          calorias: "73"
        },
        {
          alimento: "Lubina",
          calorias: "118"
        },
        {
          alimento: "Lucio",
          calorias: "81"
        },
        {
          alimento: "Mejillón",
          calorias: "74"
        },
        {
          alimento: "Merluza",
          calorias: "86"
        },
        {
          alimento: "Mero",
          calorias: "118"
        },
        {
          alimento: "Ostras",
          calorias: "80"
        },
        {
          alimento: "Pejerrey",
          calorias: "87"
        },
        {
          alimento: "Pez espada",
          calorias: "109"
        },
        {
          alimento: "Pulpo",
          calorias: "57"
        },
        {
          alimento: "Rodaballo",
          calorias: "81"
        },
        {
          alimento: "Salmón",
          calorias: "172"
        },
        {
          alimento: "Salmón ahumado",
          calorias: "154"
        },
        {
          alimento: "Salmonete",
          calorias: "97"
        },
        {
          alimento: "Sardina en lata con aceite vegetal",
          calorias: "192"
        },
        {
          alimento: "Sardinas",
          calorias: "151"
        },
        {
          alimento: "Trucha",
          calorias: "94"
        }
      ]
    },
  ]









  constructor() { }

  ngOnInit() {
  }

}
