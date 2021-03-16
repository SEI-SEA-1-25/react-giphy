import { useState } from 'react'
import Search from "./Search"

const SearchContainer = (props) => {

  const [query, setQuery] = useState('')

  const searchQuery = () => {
    console.log('Searched!');
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    searchQuery()
  }

  const handleChange = e => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <Search 
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default SearchContainer;