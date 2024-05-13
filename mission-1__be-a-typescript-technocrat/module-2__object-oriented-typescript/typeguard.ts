type_guard: {
  // We can Check the Type before operation with `typeof` keyword.
  function add(a: number | string, b: number | string): number | string {
    if (isNumber(a) && isNumber(b)) {
      return a + b;
    } else {
      return a.toString() + b.toString();
    }
  }

  // Custom Defined type_guard;
  function isNumber(x: unknown): x is number {
    return typeof x === "number";
  }

  class CodeError extends Error {
    foo = "bar";
    constructor() {
      super("Manually Created Error");
    }
  }
  class CodeErrorV2 extends Error {
    bar = "hukka";
    constructor() {
      super("Manually Created Error");
    }
  }
  // Instance of type_guard;

  try {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(() => {
        throw new CodeError();
      })
      .catch((e) => {
        // Here `e` is unknown type;

        if (e instanceof TypeError) {
          //Now `e` type is TypeError
          console.log(e.stack);
        }
        if (e instanceof CodeError) {
          // Now Err.or Type is code error
          console.log(e.foo);
        }
      });
  } catch (error) {}
}
