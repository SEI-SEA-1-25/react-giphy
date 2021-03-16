import { useState } from 'react'

import Search from './Search'

const SearchContainer = () => {
    const[query, setQuery] = useState('')

    const searchResults = () => {
        console.log(`You searched for ${query}`)
    }

    const handleSubmit = e => {
        e.preventDefault()
        searchResults()
    }
    
    const handleChange = e => {
        setQuery(e.target.value)
    }

    console.log(query)
    
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

export default SearchContainer