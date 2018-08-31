import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dieta1500',
  templateUrl: './dieta1500.component.html',
  styleUrls: ['./dieta1500.component.css']
})
export class Dieta1500Component implements OnInit {

  dieta1 =
    {
      dias: [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo"
      ],
      horarios: [
        {
          nombre: "Desayuno",
          comidas: [
            "huevo",
            "fruta",
            "Pan",
            "Tacos",
            "Avena",
            "Avena",
            "Avena"
          ]
        },
        {
          nombre: "Media Mañana",
          comidas: [
            "pollo",
            "carne",
            "pescado",
            "fruta",
            "ensalada",
            "Avena",
            "Avena"
          ]
        },
        {
          nombre: "Comida",
          comidas: [
            "pollo",
            "carne",
            "pescado",
            "fruta",
            "ensalada",
            "Avena",
            "Avena"
          ]
        },
        {
          nombre: "Media Tarde",
          comidas: [
            "pollo",
            "carne",
            "pescado",
            "fruta",
            "ensalada",
            "Avena",
            "Avena"
          ]
        },
        {
          nombre: "Cena",
          comidas: [
            "huevo",
            "fruta",
            "licuado",
            "fruta",
            "avena",
            "Avena",
            "Avena"
          ]
        }
      ]
    }

    dieta2 =
    {
      dias: [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo"
      ],
      horarios: [
        {
          nombre: "Desayuno",
          comidas: [
            "huevo",
            "fruta",
            "Pan",
            "Tacos",
            "Avena",
            "Avena",
            "Avena"
          ]
        },
        {
          nombre: "Media Mañana",
          comidas: [
            "pollo",
            "carne",
            "pescado",
            "fruta",
            "ensalada",
            "Avena",
            "Avena"
          ]
        },
        {
          nombre: "Comida",
          comidas: [
            "pollo",
            "carne",
            "pescado",
            "fruta",
            "ensalada",
            "Avena",
            "Avena"
          ]
        },
        {
          nombre: "Media Tarde",
          comidas: [
            "pollo",
            "carne",
            "pescado",
            "fruta",
            "ensalada",
            "Avena",
            "Avena"
          ]
        },
        {
          nombre: "Cena",
          comidas: [
            "huevo",
            "fruta",
            "licuado",
            "fruta",
            "avena",
            "Avena",
            "Avena"
          ]
        }
      ]
    }
  constructor() { }

  ngOnInit() {
  }

}
