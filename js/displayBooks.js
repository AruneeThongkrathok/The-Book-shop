
export function displayBooks(books){
    let html = '';
    for (let book of books){
      html += `<div class="row book">
        <div class="col-md-4">
          <img src="${book.image}" class="img-fluid">
        </div>
        <div class="col-md-8">
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Price: ${book.price}</p>
          <p>Category: ${book.category}</p>
          <p>Description: ${book.description}</p>
        </div>
      </div>`
    }
    document.querySelector('main').innerHTML = html;
  }