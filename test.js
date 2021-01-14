const { range, of, from, interval, Subject, BehaviorSubject, ReplaySubject, timer } = require('rxjs');
const { map, filter, mergeMap, switchMap, tap, concatMap, delay } = require('rxjs/operators');

const next = x => console.log(x);
const error = () => console.log('ERRR');
const complete = () => console.log('completed!');

// range(1, 10)
// 	.pipe(
// 		filter(x => x % 2 === 1),
// 		map(x => x + x))
// 	.subscribe({ next, error, complete });

// const sub = interval(1000).subscribe({
// 	next: x => {
// 		console.log(x);
// 		if (x === 9) {
// 			sub.unsubscribe();
// 		}
// 	},
// 	complete: x => console.log('Completed')
// });

// subject
// const sub$ = new ReplaySubject();
// const observer1 = {
// 	next: x => console.log('From observer I: ' + x)
// }
// const observer2 = {
// 	next: x => console.log('From observer II: ' + x)
// }

// sub$.subscribe(observer1)
// sub$.next(1);
// sub$.next(2);
// sub$.next(3);
// sub$.subscribe(observer2)

const getData = (param) => {
	const delayTime = Math.floor(Math.random() * 10000) + 1;
	return of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
		delay(delayTime)
	)
}
// using a regular map
// from([1, 2, 3, 4]).pipe(
// 	map(param => getData(param))
// ).subscribe(val => val.subscribe(data => console.log('map:', data)));

// // using mergeMap
// from([1, 2, 3, 4]).pipe(
// 	mergeMap(param => getData(param))
// ).subscribe(val => console.log('mergeMap:', val));

// // using concatMap
from([1, 2, 3, 4]).pipe(
	concatMap(param => getData(param))
).subscribe(val => console.log('concatMap:', val));


map(x => x * x)(of(1, 2, 3)).subscribe(x => console.log(x));