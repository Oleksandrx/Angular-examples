import { Component } from "@angular/core";
import { Observable, Subscriber } from 'rxjs';


@Component({
    selector: "async-pipes",
    templateUrl: "./02. async-pipe.component.html"
})

export class AsyncPipesComponent {

    //example - 1
    dataFromServer: Promise<string> = null;
    resolvePromise: Function = null;
    fail: Function = null;

    //example - 2
    counter: number = 0;
    time: Observable<number>;

    constructor() {
        //example - 1
        this.dataFromServer = new Promise<string>((resolve, reject) => {this.resolvePromise = resolve; this.fail = reject; })
    }

    getData() {  //example - 1
        setTimeout(() => {
            this.resolvePromise("Data from server");
        }, 1000);
    }

    start() {
        this.time = new Observable<number>((observer: Subscriber<number>) => {
            setInterval(() => {
                observer.next(this.counter++);

            }, 1000);
        });
    }
}