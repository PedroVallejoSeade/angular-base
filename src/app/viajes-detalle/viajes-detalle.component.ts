import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'viajes-detalle',
  templateUrl: './viajes-detalle.component.html',
  styleUrls: ['./viajes-detalle.component.scss']
})
export class ViajesDetalleComponent implements OnInit {
  @ViewChild('formContent', {static: true}) formContent: ElementRef;
  step: number;

  constructor() {
    this.step = 1;
  }

  ngOnInit(): void {
  }

  verPrimerStep(){
    const content = this.formContent.nativeElement;
    content.style.marginLeft = '0%';
    this.step = 1;
  }

  verSegundoStep(){
    const content = this.formContent.nativeElement;
    content.style.marginLeft = '-100%';
    this.step = 2;
  }

  verTercerStep(){
    const content = this.formContent.nativeElement;
    content.style.marginLeft = '-200%';
    this.step = 3;
  }

  verCuartoStep(){
    const content = this.formContent.nativeElement;
    content.style.marginLeft = '-300%';
    this.step = 4;
  }

}
