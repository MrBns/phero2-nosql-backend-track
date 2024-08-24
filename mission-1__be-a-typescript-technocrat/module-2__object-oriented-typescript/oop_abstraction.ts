abstraction_interface: {
  // Abstraction through Interface;
  interface Vehicle {
    move(): void;
    startEngine?(): boolean;
  }

  class Car implements Vehicle {
    move(): void {
      console.log("I am moving");
    }
  }

  function moveVehicle(vehicle: Vehicle) {
    vehicle.move();
  }

  const toyota = new Car();
  moveVehicle(toyota);
}

abstraction_abstract: {
  /**
   * Class Abstraction through `abstract` keyword;
   * Abstract class is only extensible
   * abstraction class give us overall idea and a shape of class where we can be sure if this
   * class has implemented specified abstracted method or property;
   */
  abstract class Vehicle {
    constructor(public cc: number) {}
    abstract move(): void;
    abstract startEngine(): void;
    test() {
      this.move();
    }

    twoTimeOfCC() {
      return this.cc * 2;
    }
  }

  class Car extends Vehicle {
    move(): void {
      console.log("I am moving");
    }
    startEngine(): void {
      console.log("I am Starting");
    }
  }

  function startEngine(vehicle: Vehicle) {
    vehicle.test();
  }

  const car = new Car(10);
  startEngine(car);
}
