class Subject {
	observers = [];

	notify(data) {
		this.observers.forEach(o => o.next(data))
	}

	subscribe(observer) {
		this.observers.push(observer);
	}
}

class Observer {
	next() {
		console.log('Updated');
	}
}

const subject = new Subject();
subject.subscribe({
	next: (data) => {
		console.log(data)
	}
})

subject.notify('ke pasa');