// const { range, of, from, interval, Subject, BehaviorSubject, ReplaySubject, timer } = require('rxjs');
// const { map, filter, mergeMap, switchMap, tap, concatMap, delay } = require('rxjs/operators');

const { fromEvent, Subject } = rxjs;
const { map } = rxjs.operators;

const subject = new Subject();

function getCountries() {
	fetch('/countries')
		.then(response => response.text())
		.then(res => {
			subject.next(res)
			// subject.complete(); // completed!
		})
}

subject.subscribe({
	next: country => console.log(country),
	error: err => console.log('ERROR', err),
	complete: () => console.log('Completed!')
})

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