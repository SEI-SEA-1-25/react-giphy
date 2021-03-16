import { useState, useEffect } from 'react'

import Search from './Search'
import Results from './Results'

const SearchContainer = () => {
    // State variables
    const[query, setQuery] = useState('')
    const[hasSearched, setHasSearched] = useState(false)
    const[gifResults, setGifResults] = useState([])

    console.log(hasSearched)
    // Search functions
    const searchResults = () => {
        console.log(`You searched for ${query}`)
    }

    const handleSubmit = e => {
        e.preventDefault()
        searchResults()
        setHasSearched(true)
    }
    
    const handleChange = e => {
        setQuery(e.target.value)
    }

    console.log(query)

    // Results functions 
    // useEffect(() => {
    //     async function getGifs() {
    //         try {
    //             const 
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     getGifs()
    // }, [])

    // Rendering
    if(hasSearched === false  ) {
        return (
            <div>
                <Search 
                    query={query}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        )
    } else {
        return (
            <div>
                <Results />
            </div>
        )
    }
}

export default SearchContainer