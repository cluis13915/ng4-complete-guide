import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';
import { LoggingService } from '../logging.service';

@Directive({
  selector: '[appDropdown]',
  providers: [LoggingService]
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    this.loggingService.logStatusChange('click');
  }

  constructor(private elRef: ElementRef, private loggingService: LoggingService) {}
}
