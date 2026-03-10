import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective {

  constructor(private capElemeref:ElementRef) { }

  @HostListener('keyup')
  capital() {
    this.capElemeref.nativeElement.value = this.capElemeref.nativeElement.value.toUpperCase();
  }

}
