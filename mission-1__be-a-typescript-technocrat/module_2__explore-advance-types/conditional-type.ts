{
  // Conditional Type;
  type a1 = null;
  type b1 = undefined;

  type x = a1 extends null ? true : false;

  //
  type Car = {
    type: "car";
  };

  type Bike = {
    type: "bike";
  };

  type CheckVehicle<T> = T extends Car ? Car : T extends Bike ? Bike : never;

  const vahicle = {
    type: "",
  } as const;

  type Vehicle = CheckVehicle<typeof vahicle>;
}
