problem_7: {
  function isString(x: unknown): x is string {
    return typeof x === "string";
  }

  function logString(input: unknown): void {
    if (isString(input)) {
      console.log(input);
    } else {
      console.log("Input is not a string.");
    }
  }

  // Test Case;
  logString("Hello Typescript !");
  logString(10);
}

