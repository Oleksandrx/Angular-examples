import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-promise-observable',
    templateUrl: './03-promise.observable.component.html'
})

export class PromiseObservableComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        //Promise
        var promise = new Promise((resolve) => {

            setTimeout(()=> {
                console.log("Promise timeout");
                resolve(100);
            }, 1000);
            console.log("Promise started");
        });
        //resolve - will call after after async operation will be finished. ONCE!
        promise.then((value) => { console.log("Promise value = " + value); });

        //Observable
        var observable = Observable.create((observer) => {
            var idTimeout = setTimeout(() => {
                console.log("Observable timeout");
                observer.next(100);
            }, 1000);

            console.log("Observable started");

            return() => {
                console.log("Observable disposed");
                clearTimeout(idTimeout);
            }
        });
        
        //obsever - will call each tima when async operation will get data. Many times!
        var obsever = observable.subscribe((value) => {
            console.log("Observable value = " + value);
        });

        setTimeout(() => { obsever.unsubscribe(); }, 500);
    }
}