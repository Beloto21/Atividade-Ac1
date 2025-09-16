import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora-imc.html',
  styleUrls: ['./calculadora-imc.css']
})
export class CalculadoraImc {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  classificacao: string = '';

  calcularIMC(): void {
    if (this.altura <= 0) {
      this.classificacao = 'Altura inválida';
      return;
    }

    this.imc = this.peso / (this.altura * this.altura);

    if (this.imc < 18.5) {
      this.classificacao = 'Abaixo do peso';
    } else if (this.imc < 25) {
      this.classificacao = 'Peso normal';
    } else if (this.imc < 30) {
      this.classificacao = 'Sobrepeso';
    } else if (this.imc < 35) {
      this.classificacao = 'Obesidade grau I';
    } else if (this.imc < 40) {
      this.classificacao = 'Obesidade grau II';
    } else {
      this.classificacao = 'Obesidade grau III';
    }
  }
}