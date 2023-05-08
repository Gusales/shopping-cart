import { useState } from "react";

import { FaShoppingCart } from "react-icons/fa";
import "./style.css";

export default function CartButton() {
  const [cartProductsQntd, setCartProductsQntd] = useState(0);

  return (
    <button className="cart-button">
      <FaShoppingCart />
      <span className="cart-status"> {cartProductsQntd} </span>
    </button>
  );
}
