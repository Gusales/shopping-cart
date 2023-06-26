import { FormEvent, useContext, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

import { fetchProducts } from '../../api/fetchProducts'
import AppContext from '../../context/AppContext'
import './style.css'

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState('')
  const { setIsLoading, setProducts } = useContext(AppContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setIsLoading(true)
    const products = await fetchProducts(searchValue)
    setIsLoading(false)
    setProducts(products)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Busca</label>
      <div className="input-wrapper">
        <BsSearch />
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Busca"
          onChange={({ target }) => {
            setSearchValue(target.value)
          }}
        />
      </div>
    </form>
  )
}
