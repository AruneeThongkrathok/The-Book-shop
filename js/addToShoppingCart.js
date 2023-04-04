
let shoppingCart = []
let totalPrice = 0

export function addToShoppingCart (books){
    shoppingCart.push(books)
    totalPrice += books.price 
  }

export { shoppingCart, totalPrice };