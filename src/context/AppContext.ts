import { createContext } from 'react'

import { Value } from '../@types/ContextType'
const INITIAL_STATE: Value = {
  products: [],
  isLoading: false,
  showModal: false,
  setShowModal: () => false,
  setIsLoading: () => false,
  setProducts: () => [],
}

const AppContext = createContext(INITIAL_STATE)

export default AppContext
