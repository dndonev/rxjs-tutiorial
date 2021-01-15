// const { range, of, from, interval, Subject, BehaviorSubject, ReplaySubject, timer } = require('rxjs');

// const { map, filter, mergeMap, switchMap, tap, concatMap, delay } = require('rxjs/operators');
const { fromEvent, Subject, Observable, of, interval, from, range } = rxjs;
const { map, mergeMap, switchMap, tap, takeWhile, filter, first, delay, debounceTime, timeout } = rxjs.operators;

// get countries
const subject = new Subject();

function getCountries() {
	fetch('/countries')
		.then(response => response.text())
		.then(res => {
			subject.next(res)
			// subject.complete(); // completed!
		})
}

const button = document.getElementById('get-countries-btn');

const event$ = fromEvent(button, 'click')
	.pipe(
		map(e => e.type)
	);

event$.subscribe({
	next: event => {
		console.log('From event observable: ' + event)
	},
	error: err => console.log('ERROR', err),
	complete: () => console.log('Completed!')
})

// inputs (merge map)

// const input1 = document.getElementById('outer');
// const input2 = document.getElementById('inner');

// const span = document.querySelector('span');

// const outer$ = fromEvent(input1, 'input');
// const inner$ = fromEvent(input2, 'input');

//before
// outer$.subscribe(x => inner$.pipe(map(y => x + y))
// 	.subscribe(combinedValue => span.textContent = combinedValue));

//after
// outer$.pipe(
// 	mergeMap(event1 => {
// 		return inner$.pipe(
// 			map(event2 => event1.target.value + ' ' + event2.target.value))
// 	})
// ).subscribe(
// 	combinedValue => span.textContent = combinedValue
// )

// clicks (switch map)
const sbutton = document.getElementById('switch-map-btn');

const inner$ = interval(1000);

const outer$ = fromEvent(sbutton, 'click');

//before
// outer$.subscribe(event => inner$.subscribe(y => console.log(y)))

//after
// outer$.pipe(
// 	switchMap(x => inner$)
// ).subscribe(x => console.log(x));
// LOCAL

// const firstObservable$ = new Observable(subscriber => {
// 	subscriber.next(5);
// 	subscriber.error('OMG')
// 	subscriber.complete();
// });

// firstObservable$.subscribe({
// 	next: data => console.log(data),
// 	error: data => console.log(data),
// 	complete: () => console.log('COMPLETED!')
// })


// hot vs cold
// interval(1000).pipe(
// 	first(),
// 	map(x => x % 2 === 0
// 	))
// 	.subscribe(x => console.log(x));

const arr = [1, 2, 3, 4, 5];
// of(...arr).subscribe({
// 	next: x => console.log(x),
// 	complete: () => console.log('Complete')
// })


// from(arr).subscribe({
// 	next: x => console.log(x),
// 	complete: () => console.log('Complete')
// })

// range(1, 10)
// 	.pipe(timeout(1000))
// 	.subscribe({
// 		next: x => console.log(x),
// 		complete: () => console.log('Complete')
// 	})
// hot$.pipe(

// )

// 	.subscribe(data => console.log(data));




// same with subject (multicasted)
// let subject$ = new Subject();

// subject$.subscribe(res => {
// 	console.log('subscription a :', res); // subscription a : 0.91767565496093
// });

// subject$.subscribe(res => {
// 	console.log('subscription b :', res);// subscription b : 0.91767565496093
// });

// subject$.next(Math.random());
