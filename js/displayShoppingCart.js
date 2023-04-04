
import { shoppingCart, totalPrice } from "./addToShoppingCart";

export function displayShoppingCart() {
  let cartBooks = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    cartBooks += `${shoppingCart[i].title} - $${shoppingCart[i].price}\n`;
  }
  alert(`Books in cart:\n${cartBooks}\nTotal Price: $${totalPrice}`);
}
    
    