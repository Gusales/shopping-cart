import { ReactNode, useState } from "react";
import AppContext from "./AppContext";

interface Props {
  children: ReactNode
}
export default function Provider({ children }: Props) {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const value: any = {
    products,
    setProducts,
    isLoading, 
    setIsLoading
  }

  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}