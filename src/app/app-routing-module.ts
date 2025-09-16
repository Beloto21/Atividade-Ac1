import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoliceSeguro } from './apolice-seguro.component/apolice-seguro';
import { ConversorTemperatura } from './conversor-temperatura.component/conversor-temperatura';
import { CalcularMedia } from './calcular-media.component/calcular-media';
import { CalculadoraImc } from './calculadora-imc,component/calculadora-imc';

const routes: Routes = [
  { path: 'media', component: CalcularMedia},
  { path: 'apolice', component: ApoliceSeguro },
  { path: 'temperatura', component: ConversorTemperatura },
  { path: 'imc', component: CalculadoraImc },
  { path: '', redirectTo: '/media', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}