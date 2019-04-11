import { Component, OnInit } from "@angular/core";
import { ReplaySubject, BehaviorSubject } from "rxjs/Rx";

@Component({
    selector: 'subject-component',
    templateUrl: './06-subject.component.html'
})

export class SubjectComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.clear();

        // ReplaySubject
        // http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/subjects.html

        let replaySubject = new ReplaySubject();
        let observerReplaySubject = replaySubject.subscribe(
            r => console.log(r),
            e => console.error(e),
            () => console.info("completed")
        );
        replaySubject.next(1);
        replaySubject.next(2);
        replaySubject.next(3);
        replaySubject.complete();

        observerReplaySubject.unsubscribe();

        // BehaviorSubject
        let behaviorSubject = new BehaviorSubject(0);

        behaviorSubject.next(101);
        behaviorSubject.next(102);
        behaviorSubject.next(103);

        let observerBehaviorSubject = behaviorSubject.subscribe(
            r => console.log(r),
            e => console.error(e),
            () => console.info("completed")
        );
        behaviorSubject.next(104);
        behaviorSubject.next(105);
        behaviorSubject.complete();

        behaviorSubject.unsubscribe();
    }
}