import { Component, OnInit } from "@angular/core";
import { Observable, ConnectableObservable } from "rxjs/Rx";

@Component({
    selector: 'cold-hot-observable',
    templateUrl: './05-cold.hotobservable.component.html'
})

export class ColdHotObservableComponent implements OnInit {
    
    coldStream: Observable<number>;
    hotStream_RefCount: Observable<number>;
    hotStream_Connect: ConnectableObservable<any>;

    constructor() {}

    ngOnInit() {
        this.coldStream = Observable.interval(500).take(10);
        
        this.hotStream_RefCount = Observable.interval(500).take(10)
            .publish()  //common stream for all
            .refCount(); //start stream after the first subscriber appeared

            this.hotStream_Connect = Observable.interval(500).take(10)
            .publish();  //common stream for all

            this.hotStream_Connect.connect() ; //start stream after the first subscriber appeared
    }

    subscribe1() {
        // this.coldStream.subscribe((value) => {
        // this.hotStream.subscribe((value) => {
        this.hotStream_Connect.subscribe((value) => {
            console.log("Subscriber 1 received a value " + value);
        })
    }

    subscribe2() {
        // this.coldStream.subscribe((value) => {
        // this.hotStream.subscribe((value) => {
        this.hotStream_Connect.subscribe((value) => {
            console.log("       Subscriber 2 received a value " + value);
        })
    }

}