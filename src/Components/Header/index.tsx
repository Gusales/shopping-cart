import { BsBagFill } from "react-icons/bs";
import SearchForm from "../SearchForm";

import CartButton from "../CartButton";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div className="shopping-cart-icon">
        <BsBagFill className="header-icon" />
        <h1 className="headerTitle">Shopping Cart</h1>
      </div>

      <SearchForm />

      <CartButton />
    </header>
  );
}
