{
  // Generics;

  interface Developer<T extends String = ""> {
    name: T;
  }

  const dev: Developer<"nazmul"> = {
    name: "nazmul",
  };
}
