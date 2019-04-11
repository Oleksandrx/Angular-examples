import { Component, OnInit } from "@angular/core";
// import { Observable } from "rxjs/Observable";
import { Observable } from "rxjs/Rx";

@Component({
    selector: 'app-create',
    templateUrl: './01-create.component.html'

})

export class CreateComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        
        // Example - 1
        console.clear();
        console.info("Example - 1");

        // var source = Observable.create(function (observer) { //the same as through new
        var observable = new Observable(function (observer) {
        setTimeout(function() {
            console.log("timeout - 1500");
            observer.next(100); 
            observer.complete();
        }, 1500);            
        
        console.log("started");
        });

        //create subscriber with 3 handlers
        var observer = observable.subscribe(
            function (value) { //onNext
                console.log("next " + value);
            },
            function (error) { //onError
                console.error(error);
            },
            function () { //onCompleted
                console.info("completed");
            }
        );


        // Example - 2
        // var observable2 = Observable.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); //create stream from array
        // var observable2 = Observable.from(0, 1, 2, 3, 4, 5, 6, 7, 8, 9); //create stream from numbers
         var observable2 = Observable.interval(500).take(10);  //create stream from interval

        setTimeout(function() { 
            console.info("Example - 2");
            observable2.filter(x => x % 2 == 0) //stream with even numbers
            .map(x => x + ".") //stream with reduced numbers
            .forEach(x => console.log(x)); //for each element doing some operation

        }, 2000);            

        // Example - 3

    }        
}
