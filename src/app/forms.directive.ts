import { Directive , ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appForms]'
})
export class FormsDirective {

  constructor() { }

  @HostListener("change") changeHandler(){
    console.log("triggered");
    
  } 
}
