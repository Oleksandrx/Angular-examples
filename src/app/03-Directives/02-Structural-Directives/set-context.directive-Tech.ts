import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[setContext]"
})

export class SetContextDirective {

    constructor(private templateRef: TemplateRef<any>, private ViewContainer: ViewContainerRef) { }

        // tslint:disable-next-line:use-life-cycle-interface
        ngOnInit() {
            // tslint:disable-next-line:prefer-const
            let context: UserCardContext = new UserCardContext("Petro", "Petrenko");
            this.ViewContainer.createEmbeddedView(this.templateRef, context);
        }
}

class UserCardContext {
    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
