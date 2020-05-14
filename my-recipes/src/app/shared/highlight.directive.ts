import { Directive, Input, HostListener, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor: string = 'LightCyan';
  @Input('appHighlight') highlightColor: string = 'Cyan';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.elRef.nativeElement.style.background.color = this.highlightColor;
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
