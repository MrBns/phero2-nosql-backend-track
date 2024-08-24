oop_class: {
  class Animal {
    /* Class has property access modifier 1. public 2. private  */
    //   name: string;
    //   species: string;
    //   sound: string;

    constructor(private name: string, public species: string, public sound: string) {
      /* ---| if we declear the access modifier before parameter. we don't need to declear property top of the class and initialize inside constructor.
    ------| typescript will do this .. its call Parameter Properties; */
      // this.name = name;
      // this.sound = sound;
      // this.species = species;
    }
    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "dog", "ghew ghew");
  dog.makeSound();

  const cat = new Animal("Lalu Miya", "cat", "mew mew");

  cat.makeSound();
}
