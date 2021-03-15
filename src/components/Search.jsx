import { useState } from 'react'

const Search = (props) => {

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

  console.log(query);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={query}
        />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Search;