reverse_array: {
  function reverseArray<T>(arr: T[]): T[] {
    return arr.toReversed();
  }

  console.log(reverseArray(["language", "Rust", "Love", "I"]));


  console.log(reverseArray([10, 20, 30, 40]));
}
