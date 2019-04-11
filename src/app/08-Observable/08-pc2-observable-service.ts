import { Component, OnInit } from "@angular/core";
import { ObservableService } from './08-observable-service';

@Component({
    selector: "pc2-observable-service",
    templateUrl: "./08-pc2-observable-service.html"
})

export class PC2ObservableService implements OnInit {

    value: string = "";

    constructor(private service: ObservableService) { }

    ngOnInit() {
    }

    start() {
        this.service.subscribe((number) => this.value += number.toString() + ",");
    }
}

