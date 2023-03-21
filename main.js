async function getJson (url){
  let rawData = await fetch(url);
  let data = await rawData.json();
  return data;
}

async function start(){
  let books = await getJson('/json/books.json')
  console.log(books)
  
}
start()