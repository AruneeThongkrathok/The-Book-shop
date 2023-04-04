
export function displayBooks(books) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      const bookElem = document.createElement("div");
      bookElem.classList.add("card");
      bookElem.innerHTML = `
        <img src="${book.image}" class="card-img-top" alt="${book.title}" data-id="${book.id}">`;
      container.appendChild(bookElem);
  
      const bookImg = bookElem.querySelector("img");
      bookImg.addEventListener("click", () => {
        const bookId = bookImg.dataset.id;
        const bookObj = books.find((book) => book.id === parseInt(bookId));
        // Create a modal or a popup window to display the book information
        // For example:
        alert(`Title: ${bookObj.title}\nAuthor: ${bookObj.author}\nCategory: ${bookObj.category}\nDescription: ${bookObj.description}\nPrice: $${bookObj.price}`);
      });
    }
  }