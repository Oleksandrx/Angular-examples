import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[myIf]"
})

export class MyIfDirective {

    constructor(private templateRef: TemplateRef<any>, private ViewContainer: ViewContainerRef) {
    }

    @Input("myIf") set myIfValue(condition: boolean) {
        if (!condition) {
            this.ViewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.ViewContainer.clear();
        }
    }
}
