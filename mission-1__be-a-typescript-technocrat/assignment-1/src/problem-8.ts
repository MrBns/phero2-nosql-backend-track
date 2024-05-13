problem_8: {
  class Car {
    constructor(public name: string, public model: string, public year: number) {}

    displayInfo() {
      console.log(`Your Car Model is: ${this.year} ${this.name} ${this.model}`);
    }
  }

  // Sample Input:
  const car = new Car("Toyota", "Corolla", 2020);

  // Sample Output:
  car.displayInfo();
}
