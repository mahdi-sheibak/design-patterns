// https://en.wikipedia.org/wiki/Mediator_pattern

class Member {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, toMember) {
    this.chatroom.send(message, this, toMember);
  }

  receive(message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  }
}

class Chatroom {
  constructor() {
    this.members = {};
  }

  addMember(member) {
    this.members[member.name] = member;
    member.chatroom = this;
  }

  send(message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  }
}

const chatroom = new Chatroom();
const mahdi = new Member("Mahdi");
const john = new Member("John");

chatroom.addMember(mahdi);
chatroom.addMember(john);

mahdi.send("How you doing?", john);
john.send("Hey! Im good how are you yourself?", mahdi);
