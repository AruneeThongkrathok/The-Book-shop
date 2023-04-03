import { displayBooks } from "./displayBooks";

export function sortBooks(books, sortBy){
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