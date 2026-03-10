import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHilights]'
})
export class HilightsDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter')
    apply() {
      this.element.nativeElement.style.backgroundColor = 'yellow';
  }

   @HostListener('mouseleave')
    remove() {
      this.element.nativeElement.style.backgroundColor = 'red';
  }

}
