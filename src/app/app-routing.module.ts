import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CalculadoraImcComponent } from './components/calculadora-imc/calculadora-imc.component';
import { CalculadoraCaloriasComponent } from './components/calculadora-calorias/calculadora-calorias.component';
import { EjerciciosPiernaComponent } from './components/ejercicios-pierna/ejercicios-pierna.component';
import { Dieta1500Component } from './components/dieta1500/dieta1500.component';
import { ListaAlimentosComponent } from './components/lista-alimentos/lista-alimentos.component';

const routes: Routes = [
    {
        path:'', component: InicioComponent
    },
    {
        path:'imc', component: CalculadoraImcComponent 
    },
    {
        path:'inicio', component: InicioComponent
    },
    {
        path: 'calorias', component: CalculadoraCaloriasComponent
    },
    {
        path: 'ejercicios-pierna', component:EjerciciosPiernaComponent
    },
    {
        path: 'dieta1500', component:Dieta1500Component
    },
    {
        path: 'lista-alimentos', component:ListaAlimentosComponent
    },
    {
        path: '**', redirectTo: 'inicio'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
