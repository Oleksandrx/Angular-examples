import {Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: "[colorChange]"
})

export class ColorChangeDirective {

    constructor(private eelement: ElementRef, private renderer: Renderer2) {
    }

    @Input("colorChange") set changeColor(color: string) {
        this.renderer.setStyle(this.eelement.nativeElement, "color", color);
    }

}
