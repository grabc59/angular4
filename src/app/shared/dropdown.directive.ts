import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { 

   }

  @HostBinding('class.open') menuOpen: boolean = false;

  @HostListener('click') click(eventData:Event) {
    this.menuOpen = !this.menuOpen;
  }


}
