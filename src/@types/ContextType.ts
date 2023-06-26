import { Dispatch, SetStateAction } from 'react'
import { Card } from './ProductCard'

export interface Value {
  products: Card[]
  setProducts: Dispatch<SetStateAction<Card[]>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}
