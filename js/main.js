import { getJSON } from "./utils/getJSON"


async function start(){
  let books = await getJSON('/json/books.json')

  let html = '';
  for (let book of books){
    html += '<div class="book">'
    for (let key in book){
      let value = book[key];
      html += `<p> ${key}: ${value} </p>`;
    }
    html += '</div>'
  }
  document.querySelector('main').innerHTML = html;
  
}
start()