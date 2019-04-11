import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { Observable } from "rxjs/Observable";

import "rxjs/add/observable/fromEvent";

@Component({
    selector: 'app-event-observable',
    templateUrl: './04-event.observable.component.html'
})

export class EventObservableComponent implements AfterViewInit {

    //Example 1
    @ViewChild("eventBtn1") eventButton: ElementRef;
    streamEvent: Observable<any>;
    resultEvent: string = "";
    
    //Example 2
    @ViewChild("eventBtn2") debounceButton: ElementRef;
    streamDebounce: Observable<any>;
    resultDebounce: string = "";

    //Example 5
    @ViewChild("toggleBtn") toggleButton: ElementRef;
    toggleStream: Observable<any>;
    dashGeneratorStream: Observable<any>;
    toggleResultStream: Observable<any>;
    resultToggle: string = "";

    //Example 6
    streamForCatch: Observable<any>; 

    streamMapFlatMap: Observable<any>; 
    streamMapFlatMap2: Observable<any>;
    streamMapFlatMap3: Observable<any>;

    constructor() {}

    ngAfterViewInit() {
        //Example 1
        this.streamEvent = Observable.fromEvent(this.eventButton.nativeElement, "click");
        this.streamEvent.subscribe(() => {
            this.resultEvent += "@";
        })

        //Example 2
        this.streamDebounce = Observable.fromEvent(this.debounceButton.nativeElement, "click");
        this.streamDebounce.scan(x => x + 1, 0)
        //scan run function for every value in the stream
        .buffer(this.streamDebounce.debounce(() => Observable.interval(1000)))
        .forEach(x => this.send(x));

        //Example 3
        this.streamMapFlatMap = Observable
        .interval(100)
        .take(10)
        .map(x => x * 2);
        this.streamMapFlatMap.subscribe(x => console.log(x));
        
        //Example 4
        this.streamMapFlatMap2 = Observable
        .interval(120)
        .take(10)
        .map(x => 
            Observable.timer(500).map(() => x)
        );
        this.streamMapFlatMap2.subscribe(x => console.log(x.toString()));

        //Example 5
        this.streamMapFlatMap3 = Observable
        .interval(600)
        .take(10)
        .flatMap(x => 
            Observable.timer(500).map(() => x)
        );
        this.streamMapFlatMap3.subscribe(x => console.log(x));

        //Example 5
        this.toggleStream = Observable
        .fromEvent<Event>(this.toggleButton.nativeElement, "change")
        .map(x => (x.target as HTMLInputElement).checked);

        this.dashGeneratorStream = Observable
        .interval(500)
        .map(() => "-");

        this.toggleResultStream = this.toggleStream
        .filter(x => x === true)
        .flatMap(() => this.dashGeneratorStream.takeUntil(this.toggleStream));

        this.toggleResultStream.subscribe(x => this.resultToggle += x);

        //Example 6 - catch

        setTimeout(() => { 
            this.streamForCatch = Observable.of(1, 2, 3, 4, 5, 6)
            .map(x => {
                if(x == 4) throw "error";
                return x;
            })
            // .catch(() => Observable.of("error text"));
            // .retry(3);
            .retryWhen(err => err.delay(1000).take(3));

            this.streamForCatch.subscribe(
                (x) => console.log(x),
                (error) => {
                    return console.error(error);
                },
                () => console.log("done")
            );
            }, 8000);
            
    }
    
    //Example 2
    send(data: any) {
        this.resultDebounce += JSON.stringify(data);
    }


}



