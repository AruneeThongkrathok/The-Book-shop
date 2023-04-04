
let cart = []

export function addToCart (books){
    cart.push(books)

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
    }

  }