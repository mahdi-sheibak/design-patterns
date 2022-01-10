// abstract class
class Sandwich {
  constructor() {
    if (new.target === Sandwich) throw new TypeError("this class is abstract.");
  }

  make() {
    return this.makeBread().addSalad().addToppings().addSauces();
  }

  makeBread() {
    console.log("making bread.");
    return this;
  }

  addSalad() {
    console.log("Adding salad.");
    return this;
  }

  addSauces() {
    console.log("Adding sauces.");
    return this;
  }

  // abstract method
  addToppings() {
    throw new Error("This method is abstract.");
  }
}

class TurkeySandwich extends Sandwich {
  addToppings() {
    console.log("Adding turkey.");
    return this;
  }
}

class ChickenSandwich extends Sandwich {
  addToppings() {
    console.log("Adding chicken.");
    return this;
  }
}

const turkeySandwich = new TurkeySandwich();
turkeySandwich.make();

console.log("===============");

const chickenSandwich = new ChickenSandwich();
chickenSandwich.make();
