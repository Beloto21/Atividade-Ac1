import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice-seguro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apolice-seguro.html',
  styleUrls: ['./apolice-seguro.css']
})
export class ApoliceSeguro {
  nome = '';
  sexo = '';
  idade = 0;
  valorAutomovel = 0;
  valorApolice = 0;

  calcularApolice() {
    if (this.sexo === 'masculino') {
      this.valorApolice = this.idade <= 25 ? this.valorAutomovel * 0.15 : this.valorAutomovel * 0.10;
    } else {
      this.valorApolice = this.valorAutomovel * 0.08;
    }
  }
}