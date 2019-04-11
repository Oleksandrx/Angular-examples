import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[myDelay]"
})

export class MyDelayDirective {

    constructor(private templateRef: TemplateRef<any>, private ViewContainer: ViewContainerRef) { }

    @Input("myDelay") set delayTime(time: number) {

        setTimeout(() => {
            this.ViewContainer.createEmbeddedView(this.templateRef);
        }, time);
    }
}
