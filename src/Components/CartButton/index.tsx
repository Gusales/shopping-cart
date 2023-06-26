import { useContext } from 'react'

import { FaShoppingCart } from 'react-icons/fa'
import './style.css'
import AppContext from '../../context/AppContext'

export default function CartButton() {
  const { setShowModal } = useContext(AppContext)
  return (
    <button className="cart-button" onClick={() => setShowModal(true)}>
      <FaShoppingCart />
      <span className="cart-status"> 0 </span>
    </button>
  )
}
