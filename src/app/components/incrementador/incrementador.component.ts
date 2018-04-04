import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda = 'Leyenda';
  @Input() progreso = 50;

  constructor() {
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
   }

  ngOnInit() {
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
  }

  cambiarValor( valor: number ) {
    console.log('progreso: ' + this.progreso);
    console.log('valor: ' + valor);
      if ( valor < 0) {
        console.log('progreso+valor: ' + ((+this.progreso) + valor));
        if (((+this.progreso) + valor) < 0) {
          this.progreso = 0;
        } else {
          this.progreso = (+this.progreso) + valor;
        }
      } else if (valor > 0) {
        console.log('progreso+valor: ' + ((+this.progreso) + valor));
        if (((+this.progreso) + valor) > 100) {
          this.progreso = 100;
        } else {
          this.progreso = (+this.progreso) + valor;
        }
      }
      console.log('progreso: ' + this.progreso);
  }
}
