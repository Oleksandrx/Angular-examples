import {Directive, ElementRef, Input, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector: "[getCoords]"
})

export class GetCoordsDirective {

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    @HostListener("mousemove", ["$event"]) onMouseMove(event: MouseEvent) {
        // tslint:disable-next-line:prefer-const
        let message = "X " + event.offsetX + " Y " + event.offsetY;
        this.element.nativeElement.innerHTML = message;
    }

}

