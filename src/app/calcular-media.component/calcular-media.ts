import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcular-media',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calcular-media.html',
  styleUrls: ['./calcular-media.css']
})
export class CalcularMedia {
  ac1 = 0;
  ac2 = 0;
  ag = 0;
  af = 0;
  resultado = '';

  calcularMedia() {
    const media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    this.resultado = media >= 5 ? `Aprovado com média ${media.toFixed(2)}` : `Reprovado com média ${media.toFixed(2)}`;
  }
}