import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() labels: string[] = ["a", "b", "c"];
  @Input() data: number[] = [1,2,3];
  @Input() type: string = 'doughnut';
  @Input() leyenda: string = 'Leyenda';

  constructor() { }

  ngOnInit() {
  }

}
