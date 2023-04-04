import { getJSON } from "./utils/getJSON";
import { displayBooks } from "./displayBooks";
import { sortBooks } from "./sortBooks";
import { filterBooks } from "./filterBooks";
import { displayShoppingCart } from "./displayShoppingCart";

async function start() {
  let books = await getJSON('/json/books.json')

  displayBooks(books);
  
  document.getElementById("sort-select").addEventListener("change", () => {
    const sortBy = document.getElementById("sort-select").value;
    sortBooks(books, sortBy);
  });

  document.getElementById("book-filter").addEventListener("input", () => {
    const filterValue = document.getElementById("book-filter").value;
    filterBooks(books, filterValue);
  });

  const cartButton = document.querySelector(".cart-button");
  cartButton.addEventListener("click", () => {
    displayShoppingCart();
  });


}

start();