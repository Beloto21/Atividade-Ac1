import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor-temperatura',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversor-temperatura.html',
  styleUrls: ['./conversor-temperatura.css']
})
export class ConversorTemperatura {
  celsius = 0;
  fahrenheit = 0;
  kelvin = 0;

  converter() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = this.celsius + 273.15;
  }
}