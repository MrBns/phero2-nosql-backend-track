{
  // array with interface;
  interface ManArray {
    [index: number]: string;
  }
  const mans: ManArray = ["Na", "zm", "ul"];

  // Array with type
  type ManArray2 = string[];

  // Function With interface;

  interface ISum {
    (a: number, b: number): number;
  }

  const sum: ISum = (a, b) => a + b;

  //function in type;
  type TSum = (a: number, b: number) => number;
  const sum3: TSum = (a, b) => a + b;

  // Interface is OOP and it can be implemented in Class;
  interface cString extends String {}

  //On the other hand type can be use to shorten type;
}
