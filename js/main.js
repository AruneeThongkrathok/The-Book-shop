import { getJSON } from "./utils/getJSON"


async function start(){
  let books = await getJSON('/json/books.json')

  displayBooks(books);
  document.getElementById("sort-select").addEventListener("change", () => {
    const sortBy = document.getElementById("sort-select").value;
    sortBooks(books, sortBy);
  });

}

function displayBooks(books){

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

function sortBooks (books, sortBy){

  if (sortBy === 'title-asc'){
    books.sort((a,b) => a.title.localeCompare(b.title));
  }
  else if (sortBy === 'title-desc'){
    books.sort((a,b) => b.title.localeCompare(a.title));
  }
  else if (sortBy === 'price-asc'){
    books.sort((a,b) => a.price - b.price);
  }
  else if (sortBy === 'price-desc'){
    books.sort((a,b) => b.price - a.price);
  }
  else if (sortBy === 'author-asc'){
    books.sort((a,b) => a.author.localeCompare(b.author));
  }
  else if (sortBy === 'author-desc'){
    books.sort((a,b) => b.author.localeCompare(a.author));
  }
  displayBooks(books);

}

start()