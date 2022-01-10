// https://en.wikipedia.org/wiki/Observer_pattern

class Observer {
  constructor() {
    this.observers = []; // array of observer functions
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((f) => f !== fn);
  }

  fire() {
    this.observers.forEach((observer) => observer());
  }
}

function observer1() {
  console.log("Observer 1 Fired!");
}

function observer2() {
  console.log("Observer 2 Fired!");
}

const observer = new Observer();
observer.subscribe(observer1);
observer.subscribe(observer2);
observer.fire();
