const { range, of, from, interval, Subject, BehaviorSubject, ReplaySubject, timer } = require('rxjs');
const { map, filter, mergeMap, switchMap, tap, concatMap, delay } = require('rxjs/operators');

const next = x => console.log(x);
const error = () => console.log('ERRR');
const complete = () => console.log('Completed!');


