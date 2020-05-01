import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: '' , component: CalculadoraComponent },
{path: 'resultados', component: ResultadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
