import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrouselComponent } from './components/inicio/carrousel/carrousel.component';
import { FrasesMotivacionalesComponent } from './components/frases-motivacionales/frases-motivacionales.component';
import { TipsComponent } from './components/inicio/tips/tips.component';
import { FooterComponent } from './components/footer/footer.component';
import { IMCComponent } from './components/calculadora-imc/imc/imc.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { ResultadosImcComponent } from './components/calculadora-imc/resultados-imc/resultados-imc.component';
import { CalculadoraImcComponent } from './components/calculadora-imc/calculadora-imc.component';
import { CaloriasComponent } from './components/calculadora-calorias/calorias/calorias.component';
import { ResultadosCaloriasComponent } from './components/calculadora-calorias/resultados-calorias/resultados-calorias.component';
import { CalculadoraCaloriasComponent } from './components/calculadora-calorias/calculadora-calorias.component';
import { EjerciciosPiernaComponent } from './components/ejercicios-pierna/ejercicios-pierna.component';
import { Dieta1500Component } from './components/dieta1500/dieta1500.component';
import { ListaAlimentosComponent } from './components/lista-alimentos/lista-alimentos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrouselComponent,
    FrasesMotivacionalesComponent,
    TipsComponent,
    FooterComponent,
    IMCComponent,
    InicioComponent,
    ResultadosImcComponent,
    CalculadoraImcComponent,
    CaloriasComponent,
    ResultadosCaloriasComponent,
    CalculadoraCaloriasComponent,
    EjerciciosPiernaComponent,
    Dieta1500Component,
    ListaAlimentosComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
