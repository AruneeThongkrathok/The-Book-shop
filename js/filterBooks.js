import { displayBooks } from "./displayBooks";

export function filterBooks(books, searchText) {
  let filteredBooks = books.filter((book) => {
    const regex = new RegExp(searchText, "gi");
    return (
      regex.test(book.title) ||
      regex.test(book.author) ||
      regex.test(book.category) ||
      (book.price >= parseFloat(searchText.split("-")[0]) &&
        book.price <= parseFloat(searchText.split("-")[1]))
    );
    
  });

  displayBooks(filteredBooks);
}