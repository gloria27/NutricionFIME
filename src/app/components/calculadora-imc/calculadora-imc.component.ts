import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css']
})
export class CalculadoraImcComponent implements OnInit {
  @Input("IMC") IMC;
  
  constructor() { }

  ngOnInit() {
  }

}
