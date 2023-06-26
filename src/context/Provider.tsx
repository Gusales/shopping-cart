import AppContext from './AppContext'
import { ReactNode, useState } from 'react'
import { Value } from '../@types/ContextType'
import { Card } from '../@types/ProductCard'

interface Props {
  children: ReactNode
}
export default function Provider({ children }: Props) {
  const [products, setProducts] = useState<Card[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const value: Value = {
    products,
    setProducts,
    isLoading,
    setIsLoading,
    showModal,
    setShowModal,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
