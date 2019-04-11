import { Directive, ElementRef, Renderer2, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[blockRepeat], blockRepeat"
})

export class BlockRepeatDirective {

    @Input() message: string;
    @Input() count: number;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        for ( let i = 0; i < this.count; i++) {
            // tslint:disable-next-line:prefer-const
            let elem: HTMLDivElement = this.renderer.createElement("div");
            this.renderer.appendChild(this.element.nativeElement, elem);
            elem.innerHTML = this.message;
        }
    }

}
