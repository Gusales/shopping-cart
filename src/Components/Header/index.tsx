import { BsBagFill } from 'react-icons/bs'
import SearchForm from '../SearchForm'

import './style.css'
import CartButton from '../CartButton'

export default function Header() {
  return (
    <header>
      <div className="shopping-cart-icon">
        <BsBagFill className="header-icon" />
        <h1>Shopping Cart</h1>
      </div>

      <SearchForm />

      <CartButton />
    </header>
  )
}
