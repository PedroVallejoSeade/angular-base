import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'viajes-detalle',
  templateUrl: './viajes-detalle.component.html',
  styleUrls: ['./viajes-detalle.component.scss']
})
export class ViajesDetalleComponent implements OnInit {
  step: number;
  @ViewChild('formContent', {static: true}) formContent: ElementRef;
  @ViewChild('bullet1', {static: true}) bullet1: ElementRef;
  @ViewChild('bullet2', {static: true}) bullet2: ElementRef;
  @ViewChild('bullet3', {static: true}) bullet3: ElementRef;
  @ViewChild('bullet4', {static: true}) bullet4: ElementRef;

  constructor() {
    this.step = 1;
  }

  ngOnInit(): void {
    const bullet1 = this.bullet1.nativeElement;
    bullet1.style.backgroundColor = '#0F2B52';
    bullet1.style.color = 'white';
    bullet1.style.border = '1px solid #0F2B52';
  }

  verPrimerStep(){
    const content = this.formContent.nativeElement;
    content.style.marginLeft = '0%';
    
    this.step = 1;

    const bullet1 = this.bullet1.nativeElement;
    bullet1.style.backgroundColor = '#0F2B52';
    bullet1.style.color = 'white';
    bullet1.style.border = '1px solid #0F2B52';
    bullet1.style.opacity = '1';

    const bullet2 = this.bullet2.nativeElement;
    bullet2.style.backgroundColor = 'white';
    bullet2.style.color = 'black';
    bullet2.style.border = '1px solid #d2d2d2';
    bullet2.style.opacity = '1';

    const bullet3 = this.bullet3.nativeElement;
    bullet3.style.backgroundColor = 'white';
    bullet3.style.color = 'black';
    bullet3.style.border = '1px solid #d2d2d2';
    bullet3.style.opacity = '1';
    
    const bullet4 = this.bullet4.nativeElement;
    bullet4.style.backgroundColor = 'white';
    bullet4.style.color = 'black';
    bullet4.style.border = '1px solid #d2d2d2';
    bullet4.style.opacity = '1';
  }

  verSegundoStep(){
    const content = this.formContent.nativeElement;
    content.style.marginLeft = '-100%';
    
    this.step = 2;

    const bullet1 = this.bullet1.nativeElement;
    bullet1.style.backgroundColor = '#0F2B52';
    bullet1.style.color = 'white';
    bullet1.style.border = '1px solid #0F2B52';
    bullet1.style.opacity = '0.5';

    const bullet2 = this.bullet2.nativeElement;
    bullet2.style.backgroundColor = '#0F2B52';
    bullet2.style.color = 'white';
    bullet2.style.border = '1px solid #0F2B52';
    bullet2.style.opacity = '1';

    const bullet3 = this.bullet3.nativeElement;
    bullet3.style.backgroundColor = 'white';
    bullet3.style.color = 'black';
    bullet3.style.border = '1px solid #d2d2d2';
    bullet3.style.opacity = '1';
    
    const bullet4 = this.bullet4.nativeElement;
    bullet4.style.backgroundColor = 'white';
    bullet4.style.color = 'black';
    bullet4.style.border = '1px solid #d2d2d2';
    bullet4.style.opacity = '1';
  }

  verTercerStep(){
    const content = this.formContent.nativeElement;
    content.style.marginLeft = '-200%';
    
    this.step = 3;

    const bullet1 = this.bullet1.nativeElement;
    bullet1.style.backgroundColor = '#0F2B52';
    bullet1.style.color = 'white';
    bullet1.style.border = '1px solid #0F2B52';
    bullet1.style.opacity = '0.5';

    const bullet2 = this.bullet2.nativeElement;
    bullet2.style.backgroundColor = '#0F2B52';
    bullet2.style.color = 'white';
    bullet2.style.border = '1px solid #0F2B52';
    bullet2.style.opacity = '0.5';

    const bullet3 = this.bullet3.nativeElement;
    bullet3.style.backgroundColor = '#0F2B52';
    bullet3.style.color = 'white';
    bullet3.style.border = '1px solid #0F2B52';
    bullet3.style.opacity = '1';
    
    const bullet4 = this.bullet4.nativeElement;
    bullet4.style.backgroundColor = 'white';
    bullet4.style.color = 'black';
    bullet4.style.border = '1px solid #d2d2d2';
    bullet4.style.opacity = '1';
  }

  verCuartoStep(){
    const content = this.formContent.nativeElement;
    content.style.marginLeft = '-300%';
    
    this.step = 4;

    const bullet1 = this.bullet1.nativeElement;
    bullet1.style.backgroundColor = '#0F2B52';
    bullet1.style.color = 'white';
    bullet1.style.border = '1px solid #0F2B52';
    bullet1.style.opacity = '0.5';

    const bullet2 = this.bullet2.nativeElement;
    bullet2.style.backgroundColor = '#0F2B52';
    bullet2.style.color = 'white';
    bullet2.style.border = '1px solid #0F2B52';
    bullet2.style.opacity = '0.5';

    const bullet3 = this.bullet3.nativeElement;
    bullet3.style.backgroundColor = '#0F2B52';
    bullet3.style.color = 'white';
    bullet3.style.border = '1px solid #0F2B52';
    bullet3.style.opacity = '0.5';
    
    const bullet4 = this.bullet4.nativeElement;
    bullet4.style.backgroundColor = '#0F2B52';
    bullet4.style.color = 'white';
    bullet4.style.border = '1px solid #0F2B52';
    bullet4.style.opacity = '1';
  }

}
