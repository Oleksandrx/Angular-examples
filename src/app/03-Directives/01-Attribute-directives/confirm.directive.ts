import {Directive, Input, HostListener } from "@angular/core";

@Directive({
    selector: "[confirmDelete]"
})

export class ConfirmDeleteDirective {

    @Input("confirmDelete") onConfirmed: Function = () => { };

    @HostListener("click") onConfirm() {
        // tslint:disable-next-line:prefer-const
        let confirmed = window.confirm("Вы уверены?");

        if (confirmed) {
          console.log("onConfirmed1 called.");
            this.onConfirmed();
        }
    }

}
