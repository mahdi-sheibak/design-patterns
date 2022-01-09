class Checker {
  setSuccessor(successor) {
    this.successor = successor;
  }

  next(status) {
    if (this.successor) {
      this.successor.check(status);
    }
  }
}

class Lock extends Checker {
  check(status) {
    if (!status.locked) {
      console.log("The door is not locked");
    }
    super.next(status);
  }
}

class Alarm extends Checker {
  check(status) {
    if (!status.alarmOn) {
      console.log("The alarm is not on");
    }
    super.next(status);
  }
}

class Light extends Checker {
  check(status) {
    if (!status.lightOff) {
      console.log("The light is not off");
    }
    super.next(status);
  }
}

class Status {
  constructor() {
    this.alarmOn = false;
    this.locked = true;
    this.lightOff = false;
  }
}

const lock = new Lock();
const alarm = new Alarm();
const light = new Light();

lock.setSuccessor(alarm);
alarm.setSuccessor(light);

const status = new Status();
lock.check(status);
// alarm.check(status);
// light.check(status);
