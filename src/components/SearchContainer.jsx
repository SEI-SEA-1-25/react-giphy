import { useState } from 'react'
import Search from './Search.jsx'
import Results from './Results.jsx'
import axios from 'axios'

function SearchContainer () {
    const [input, setInput] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [hasSearched, setHasSearched] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()

        const URL = `https://api.giphy.com/v1/gifs/search?api_key=J4R1ybTBwZZLyEzmiOXl787hae19isud&q=${input}`
        const response = await axios.get(URL)
        console.log(response);
        setSearchResults(response.data.data)
        
        setHasSearched(true)
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    let searchFormContent = <Search 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        input={input}
    />

    let resultsContent = searchResults.map((result, idx) => {
        return <Results key={idx} data={result} />
    })

    return (
        <div>
            {searchFormContent}
            {hasSearched ? resultsContent : <></>}
        </div>
 
    )
}


export default SearchContainer