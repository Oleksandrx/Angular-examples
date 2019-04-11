import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';


@Injectable()
export class ObservableService {

    private observable: Observable<number>;

    constructor() {
        this.observable = this.start();
    }

    private start(): Observable<number> {
        let stream = new Observable<number>(function (observer) {
            let value = 0;
            setInterval(() => {
                value++;
                observer.next(value);
            }, 1000);
        })
        .publish()
        .refCount();
        // stream.connect();
        return stream;
    }

    public subscribe(observer: (value: number) => void) {
        return this.observable.subscribe(observer);
    }
}