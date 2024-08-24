instanceof_guard: {
  // Instance of Guard;
  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log(`${this.name} is Making Sound`);
    }
  }

  // Dog inheriting from Animal;
  class Dog extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }

    makeBerk() {
      console.log(`this is a Dog. ${this.name} is Barking`);
    }

    // Custom Static Guard for checking if this is a Dog instance;
    static isDog(x: unknown): x is Dog {
      return x instanceof Dog;
    }
  }

  // Cat inheriting from Animal;
  class Cat extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }

    makeMew() {
      console.log(`this is a Cato. ${this.name} is Mewing`);
    }

    // Custom Static Guard for checking if this is a Cat instance;
    static isCat(x: unknown): x is Cat {
      return x instanceof Cat;
    }
  }

  function animalSound(animal: Animal) {
    if (Cat.isCat(animal)) {
      animal.makeMew();
    } else if (Dog.isDog(animal)) {
      animal.makeBerk();
    } else {
      animal.makeSound();
    }
  }

  const usualAnimal = new Animal("Bird", "pich pich");
  const dog = new Dog("Dog", "Ghew Ghew");
  const cat = new Cat("cat", "Mew mew");

  animalSound(usualAnimal);
  animalSound(dog);
  animalSound(cat);


  
}
