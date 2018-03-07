import { Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress : ElementRef;

  @Input() public progreso: number = 50;
  @Input("nombre") public leyenda: string = "Leyenda";

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  ngOnInit() {
    // console.log('Progreso', this.progreso);
  }
  onChanges( newValue : number ) {

    if(newValue >= 100) {
      this.progreso = 100;
    } else if(newValue <= 0) {
      this.progreso = 0;
    } else {
        this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = Number(this.progreso);

    this.cambioValor.emit(this.progreso);
  }
  cambiarValor(valor: number) {
    if(this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if(this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

}
