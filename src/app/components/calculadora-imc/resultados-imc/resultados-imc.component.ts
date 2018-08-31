import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultados-imc',
  templateUrl: './resultados-imc.component.html',
  styleUrls: ['./resultados-imc.component.css']
})
export class ResultadosImcComponent implements OnInit {
  @Input("IMC") IMC;

  constructor() { }

  ngOnInit() {
  }

}
