import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'yuri';
  nombreUpper: string = 'YURI';
  nombreCompleto: string = 'yURi soSA';

  fecha: Date = new Date(); //El dia de hoy

}
