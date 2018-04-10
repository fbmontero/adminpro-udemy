import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input('nombre') leyenda = 'Leyenda';
  @Input() progreso = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
/*     console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso); */
   }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  onChange( newValue: number) {
    console.log(newValue);

    // const elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log(elemHTML);
    // console.log(this.txtProgress);

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elemHTML.value = Number(this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
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

      this.cambioValor.emit(this.progreso);
  }
}
