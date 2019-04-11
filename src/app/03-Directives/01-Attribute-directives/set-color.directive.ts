import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[setColor]"
})

export class SetColorDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "green");
    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
  }

}
