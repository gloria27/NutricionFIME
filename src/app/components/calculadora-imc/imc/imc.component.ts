import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class IMCComponent implements OnInit {
  @Output() IMC = new EventEmitter();

  peso: number;
  edad: number;
  altura: number;
  imc: number;

  calcularimc() {
    this.imc = Number(this.peso) + Number(this.edad) + Number(this.altura);
    this.IMC.emit(this.imc);
    var elmnt = document.getElementById("hola");
    elmnt.scrollIntoView();
  }


  constructor() {
  }

  ngOnInit() {
  }

}


