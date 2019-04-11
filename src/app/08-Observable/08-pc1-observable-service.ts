import { Component, OnInit } from "@angular/core";
import { ObservableService } from './08-observable-service';

@Component({
    selector: "pc1-observable-service",
    templateUrl: "./08-pc1-observable-service.html"
})

export class PC1ObservableService implements OnInit {

    value: string = "";

    constructor(private service: ObservableService) { }

    ngOnInit() {
    }

    start() {
        this.service.subscribe((number) => this.value += number.toString() + ",");
    }
}

