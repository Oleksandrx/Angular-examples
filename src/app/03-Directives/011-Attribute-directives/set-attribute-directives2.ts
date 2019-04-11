import { Directive, ElementRef, Attribute, Input, SimpleChange, HostListener, Renderer2, HostBinding } from "@angular/core";

import { Product } from "../../product.model";

@Directive({
    selector: "[set-attr]",
})

// tslint:disable-next-line:directive-class-suffix
export class SetAttributeDirective2 {
    // constructor(element: ElementRef, @Attribute("set-attr") bgClass: string) {
        // element.nativeElement.classList.add(bgClass || "bg-success");        }

    constructor(private element: ElementRef, private renderer: Renderer2) {}
    
    @Input("set-attr") bgClass: string;

    @Input("set-product") product: Product;

    ngOnChanges(changes: {[property: string]: SimpleChange }) {
        let change = changes["bgClass"];
        
        // console.log(JSON.stringify(change));
        
        let classList = this.element.nativeElement.classList;
        if (!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    }

    @HostListener('click') onClick() {
        
        console.log(this.product);
    }

    // ngOnInit() {
    //     this.element.nativeElement.classList.add(this.bgClass || "bg-success");
    // }
}


// Передавать аргумент декоратору @Input не обязательно, если имя свойства соответствует 
// имени атрибута управляющего элемента. 
// Таким образом, если вы примените @Input() к свойству с именем myVal, 
// Angular будет искать у управляющего элемента атрибут myVal.
