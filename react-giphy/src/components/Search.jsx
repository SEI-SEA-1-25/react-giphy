import Searchbox from './Searchbox'
import { useState } from 'react'
import Searchresult from './Searchresult'
import axios from 'axios'

const Search = () => {
    const [query, setQuery] = useState("")
    const [hasSearched, setHasSearched] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    // Bonus!
    // useEffect(() => {
    //     if(!query) return;
    //     console.log('yes')
    //     setHasSearched(true)
    //     async function fetchData() {
    //         const url = 'http://api.giphy.com/v1/gifs/search'
    //         const API_KEY = 'bs8lQnELCCJjLdAB2WjtRN8qPKJsSRCb'
    //         const response = await axios.get(`${url}?api_key=${API_KEY}&q=${query}`)
    //         const data = response.data.data
    //         console.log(data)
    //         setSearchResults([...data])
    //     }
    //     fetchData()
    // }, [query])


    const handleSubmit = async e => {
        e.preventDefault()
        setHasSearched(true)
        // const fakeAxiosCallResults = exampleResponse
        // const data = fakeAxiosCallResults.data
        const url = 'http://api.giphy.com/v1/gifs/search'
        const API_KEY = 'bs8lQnELCCJjLdAB2WjtRN8qPKJsSRCb'
        const response = await axios.get(`${url}?api_key=${API_KEY}&q=${query}`)
        const data = response.data.data
        console.log(data)
        setSearchResults(prev => [...data])
    }

    const handleChange = e => {
        setQuery(e.target.value)
    }

    let searchFormContent = <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        query={query}
    />
    let resultsContent = <Results 
        searchResults={searchResults}
    />

    return (
        <div>
            {searchFormContent}
            {hasSearched ? resultsContent : <></>}
        </div>
    )
}

export default Search