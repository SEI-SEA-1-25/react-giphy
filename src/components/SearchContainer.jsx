import { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './Search'
import Results from './Results'

const SearchContainer = () => {
    // const GIPHY_KEY = process.env.GIPHY_KEY
    // console.log(GIPHY_KEY)
    // how do we require doenv in React?
        // Must put it in express backend
    
    // State variables
    const[query, setQuery] = useState('')
    const[hasSearched, setHasSearched] = useState(false)
    const[gifResults, setGifResults] = useState([])

    // console.log(hasSearched)

    // Search functions
    const handleChange = e => {
        setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        getGifs()
        setHasSearched(true)
    }

    const getGifs = async () => {
        try {
            const url = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=z3BniXDp42xFGNOKA2rbU8g3aZhFC75r&q=${query}`)
            setGifResults(url.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log(gifResults)  
    }, [gifResults])

    // Rendering

    // ternary operator an if/else statement that happens in one line
    // {hasSearched ? resultsContent : <></>}
    if(hasSearched === false  ) {
        return (
            <div className="search-bar">
                <Search 
                    query={query}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        )
    } else {
        return (
            <div className="results-container">
                <Search 
                    query={query}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                <Results gifResults={gifResults}/>
            </div>
        )
    }
}

export default SearchContainer