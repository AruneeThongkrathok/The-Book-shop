import { addToShoppingCart } from "./addToShoppingCart";

export function displayBooks(books) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookElem = document.createElement("div");
    bookElem.classList.add("card");
    bookElem.innerHTML = `
    <img src="${book.image}" class="card-img-top" alt="${book.title}" data-id="${book.id}">
    <div class="card-body">
      <h6 class="card-title">${book.title}</h6>
      <h6 class="card-author">Author: ${book.author}</h6>
      <h6 class="card-author">Category: ${book.category}</h6>
      <div class="card-price">Price: $${book.price}</div> 
      <button class="btn btn-primary buy-button" data-id="${book.id}">Buy</button> 
    </div>`;
    container.appendChild(bookElem);

    const buyButton = bookElem.querySelector(".buy-button");
    buyButton.addEventListener("click", () => {
      const bookId = buyButton.dataset.id;
      const bookObj = books.find((book) => book.id === parseInt(bookId));
      addToShoppingCart(bookObj);

      alert(`${bookObj.title} has beed added to the cart!`);
    });
  
    const bookImg = bookElem.querySelector("img");
    bookImg.addEventListener("click", () => {
      const bookId = bookImg.dataset.id;
      const bookObj = books.find((book) => book.id === parseInt(bookId));

      alert(`Description: ${bookObj.description}`);
    });
  }
}