import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.color = 'green';
  }

}
