import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';

import { App } from './app';
import { CalcularMedia } from './calcular-media.component/calcular-media';
import { ApoliceSeguro } from './apolice-seguro.component/apolice-seguro';
import { ConversorTemperatura } from './conversor-temperatura.component/conversor-temperatura';
import { CalculadoraImc } from './calculadora-imc,component/calculadora-imc';
import { MenuSuperior } from './menu-superior-component/menu-superior';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MenuSuperior,
    CalcularMedia,
    ApoliceSeguro,
    ConversorTemperatura,
    CalculadoraImc,
    FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}