import { getJSON } from "./utils/getJSON";
import { displayBooks } from "./displayBooks";
import { sortBooks } from "./sortBooks";

async function start() {
  let books = await getJSON('/json/books.json')

  displayBooks(books);
  document.getElementById("sort-select").addEventListener("change", () => {
    const sortBy = document.getElementById("sort-select").value;
    sortBooks(books, sortBy);
  });
}

start();