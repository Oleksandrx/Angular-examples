import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[mouseEvent]"
})

export class MouseEventDirective {

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    @HostListener("mouseenter") onmouseenter() {
        this.changeColor("red");
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.changeColor(null);
    }

    private changeColor(color: string) {
        this.renderer.setStyle(this.elementRef.nativeElement, "color", color);
        this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
    }
}
