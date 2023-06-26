import { AiOutlineClose } from 'react-icons/ai'
import { useContext } from 'react'
import './style.scss'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'

export default function CartModal() {
  const { showModal, setShowModal } = useContext(AppContext)

  if (showModal === false) {
    return null
  }

  return (
    <div className="modal">
      <section className="modal-cart">
        <div className="modal-header">
          <span>
            Seu carrinho de items possui <span>{0} itens</span>
          </span>
          <button
            className="modal-header-button"
            onClick={() => setShowModal(!showModal)}
          >
            <AiOutlineClose className="modal-header-close" />
          </button>
        </div>

        <div className="modal-content">item</div>

        <div className="modal-footer">
          <div className="price">
            <span>Total: </span>
            <span>{formatCurrency(1000)}</span>
          </div>
          <div className="actions">
            <button>Finalizar Compra</button>
          </div>
        </div>
      </section>
    </div>
  )
}
