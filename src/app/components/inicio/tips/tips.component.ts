import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  tips: any[] = [

    {
      titulo: "Desayuna todos los días",
      descripcion: "El desayuno es la comida más importante del día, y no deberías saltearlo. ¿Por qué? Esencialmente porque inicia " +
        "la actividad del metabolismo interno, ya que rompe con el ayuno nocturno que realizamos mientras dormimos. Asimismo, " +
        "puede determinar las sensaciones que experimentarás durante el el día, tales como el hambre, el cansancio, el estrés " +
        "y la ansiedad.",
      imagen: "../assets/images/desayuno.jpg"
    },
    {
      titulo:"Achica tus porciones y come más veces por día",
      descripcion:" Este hábito mantendrá los niveles de glucosa en la sangre, y consecuentemente, los niveles de energía y productividad. "+
      "Contrariamente, si te alimentás con poca frecuencia tu nivel de azúcar en la sangre bajará, y cuando finalmente te "+
      "enfrentes a un plato, seguramente comerás en exceso.",
      imagen: "../assets/images/porciones.jpg"
    },
    {
      titulo: "Desayuna todos los días",
      descripcion: "El desayuno es la comida más importante del día, y no deberías saltearlo. ¿Por qué? Esencialmente porque inicia " +
        "la actividad del metabolismo interno, ya que rompe con el ayuno nocturno que realizamos mientras dormimos. Asimismo, " +
        "puede determinar las sensaciones que experimentarás durante el el día, tales como el hambre, el cansancio, el estrés " +
        "y la ansiedad.",
      imagen: "../assets/images/desayuno.jpg"
    },
    {
      titulo:"Achica tus porciones y come más veces por día",
      descripcion:" Este hábito mantendrá los niveles de glucosa en la sangre, y consecuentemente, los niveles de energía y productividad. "+
      "Contrariamente, si te alimentás con poca frecuencia tu nivel de azúcar en la sangre bajará, y cuando finalmente te "+
      "enfrentes a un plato, seguramente comerás en exceso.",
      imagen: "../assets/images/porciones.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
