import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frases-motivacionales',
  templateUrl: './frases-motivacionales.component.html',
  styleUrls: ['./frases-motivacionales.component.css']
})
export class FrasesMotivacionalesComponent implements OnInit {

    Frases:string[] = [
      "Un hombre muy ocupado para cuidar de su salud es como un mecánico muy ocupado por cuidar sus herramientas",
      "Esforzarte para llevar una nutrición adecuada, es la mejor inversión para tu cuerpo y mente que puedes hacer",
      "Tu cuerpo es tu compañero de vida, cuídalo, escuchalo, atiendelo",
      "El hombre es lo que come",
      "Esforzarte para llevar una nutrición adecuada, es la mejor inversión para tu cuerpo y mente que puedes hacer",
      "Esforzarte para llevar una nutrición adecuada, es la mejor inversión para tu cuerpo y mente que puedes hacer",
      "Esforzarte para llevar una nutrición adecuada, es la mejor inversión para tu cuerpo y mente que puedes hacer",
      "Esforzarte para llevar una nutrición adecuada, es la mejor inversión para tu cuerpo y mente que puedes hacer",
      "Esforzarte para llevar una nutrición adecuada, es la mejor inversión para tu cuerpo y mente que puedes hacer",
      "Esforzarte para llevar una nutrición adecuada, es la mejor inversión para tu cuerpo y mente que puedes hacer"
      
    ];
  constructor() { }

  ngOnInit() {
  }

}
