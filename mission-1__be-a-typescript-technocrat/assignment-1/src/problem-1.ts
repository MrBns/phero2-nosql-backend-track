problem_1: {
  // Repeat String;
  // Tip! -> you can use tsx to run Typescript. short command, faster due to built on esbuild :-)
  function repeatString(str: string, count: number): string {
    return str.repeat(count);
  }
  console.log(repeatString("Hello!", 3));
}
