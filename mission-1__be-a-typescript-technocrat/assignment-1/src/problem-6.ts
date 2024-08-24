problem_6: {
  type TBook = {
    title: string;
    author: string;
    publishedYear: number;
  };

  function isRecentBook(book: TBook) {
    const publishedYear = book.publishedYear;
    const currYear = new Date().getFullYear();
    return publishedYear > currYear - 5 && publishedYear <= currYear;
  }

  // Sample Input :
  const book1: TBook = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2019,
  };

  console.log(isRecentBook(book1));
}
