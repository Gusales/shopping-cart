import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

import './style.css'

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState('')
  console.log(searchValue)

  return (
    <form>
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
