// https://en.wikipedia.org/wiki/Singleton_pattern

class Process {
  constructor(state) {
    this.state = state;
  }
}

const Singleton = (function () {
  let instance;

  function createInstance() {
    return new Process("New Object");
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const process1 = Singleton.getInstance();
const process2 = Singleton.getInstance();

console.log(process1 === process2); // true
