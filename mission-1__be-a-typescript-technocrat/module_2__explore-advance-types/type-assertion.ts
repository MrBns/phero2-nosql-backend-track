{
  /** What is type assertion ?
   * When you explicitly infer/say any type over typescript type its call type assertion.
   * for example
   */

  fetch("url")
    .then((res) => {
      // Here I am explicitly saying hey this is Promise<string> type. because typescript doesn't know what type fetch would get from api call and what will result of json conversion;
      return res.json() as Promise<string>;
    })
    .then((result) => {
      //now here result will string;
      result;
    });
}
