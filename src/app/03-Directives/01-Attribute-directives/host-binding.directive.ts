import {Directive, ElementRef, Input, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: "[clickableElement]"
})

export class HostBindingDirective {
    isClicked = false;

    constructor(private element: ElementRef, private renderer: Renderer2) {
        element.nativeElement.style.cursor = "pointer";
    }

    @HostBinding("class.pressed") get getIsClicked() {
        return this.isClicked;
    }

    @HostListener("mousedown") onMouseDown() {
        this.isClicked = true;
    }

    @HostListener("mouseup") onMouseUp() {
        this.isClicked = false;
    }

}

