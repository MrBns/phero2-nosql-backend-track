filter_even_numbers: {
  function filterEvenNumbers(numbers: number[]):number[] {
    return [...numbers.filter((number) => number % 2 === 0)];
  }
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
}
