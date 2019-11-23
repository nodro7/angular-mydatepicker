import {Directive, ElementRef, AfterViewInit, Input} from "@angular/core";
import {ZERO_STR} from "../constants/constants";

@Directive({
  selector: "[libAngularMyDatePickerCalendar]"
})
export class AngularMyDatePickerCalendarDirective implements AfterViewInit {
  @Input() libAngularMyDatePickerCalendar: any;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    const {focus, inline, selectorHeight, selectorWidth, selectorPos} = this.libAngularMyDatePickerCalendar;
    const {style} = this.el.nativeElement;
    
    style.height = selectorHeight;
    style.width = selectorWidth;
    style.top = !inline ? selectorPos.top : "0";
    style.left = !inline ? selectorPos.left : "0";

    if (focus !== ZERO_STR && !inline) {
      this.el.nativeElement.focus();
    }
  }
}
