const { range, fromEvent, of, scheduled, timer } = require('rxjs');
const { map, filter } = require('rxjs/operators');

const next = x => console.log(x);
const error = () => console.log('ERRR');
const complete = () => console.log('completed!');

range(1, 200)
	.pipe(
		filter(x => x % 2 === 1),
		map(x => x + x))
	.subscribe({ next, error, complete });
