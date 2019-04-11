import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-disposal',
    templateUrl: './02-disposal.component.html'
})

//Disposal Problem

export class DisposalComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.clear();

        // var source = Observable.create(function (observer) { //the same as through new
        var observable = new Observable(function (observer) {
            var IdTimeout = setTimeout(function() {
                try { 
                    throw "my error";
                } catch (error) {
                    observer.error(error);    
                }
                
                // comment for try-catch testing
                // console.log("Observable timeout - 1500");
                // observer.next(100); 
                // observer.complete();

            }, 1500);            
        
            console.log("started");

            //this function will run in dispose call procedure or an error occurred
            return function() {
                console.log("dispose called");
                clearTimeout(IdTimeout);
            }
        });

        //create observer with 3 handlers
        var observer = observable.subscribe(
            function (value) { //onNext
                console.log("next " + value);
            },
            function (error) { //onError
                console.error("In subject " + error);
            },
            function () { //onCompleted
                console.info("completed");
        });

        // setTimeout(function() {
        //     observer.unsubscribe();  //run return function() 
        //     console.log("unsubscribed");
        // }, 500); 
    }        
}

