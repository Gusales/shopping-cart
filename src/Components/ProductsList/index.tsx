import { useContext, useEffect } from 'react'
import { ClipLoader } from 'react-spinners'
import { Card } from '../../@types/ProductCard'
import { fetchProducts } from '../../api/fetchProducts'
import AppContext from '../../context/AppContext'
import ProductCard from '../ProductCard'
import './style.css'
import { Value } from '../../@types/ContextType'
import CartModal from '../CartModal'

export default function ProductsList() {
  const { products, setProducts, isLoading, setIsLoading }: Value =
    useContext(AppContext)

  useEffect(() => {
    setIsLoading(true)
    fetchProducts('smartphones').then((res) => {
      setProducts(res)
      setIsLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(products)

  return (
    (isLoading && (
      <div className="loadingProducts">
        <ClipLoader color="#ff0000" className="loader" />
        <h3>Carregando Produtos...</h3>
      </div>
    )) || (
      <>
        <CartModal />
        <section className="products-list">
          {products.map(({ id, price, thumbnail, title }: Card) => (
            <ProductCard
              id={id}
              key={id}
              title={title}
              thumbnail={thumbnail}
              price={price}
            />
          ))}
        </section>
      </>
    )
  )
}
