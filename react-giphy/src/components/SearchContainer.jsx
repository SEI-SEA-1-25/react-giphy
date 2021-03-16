import {useState} from 'react'
import axios from 'axios'
import Search from './Search'
import Results from './Results'

const SearchContainer = (props) => {
    
    const [querySearch, setQuerySearch] = useState('')
    const [hasSearched, setHasSearched] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    
    const handleSubmit = async e => {
        e.preventDefault()
        const API_KEY = 'YTxhjELGhhxGyw7QsnYTGxxgaJczhmhv'
        const url = 'http://api.giphy.com/v1/gifs/search'
        const response = await axios.get(`${url}?api_key=${API_KEY}&q=${querySearch}`)
        setHasSearched(true)
        setSearchResults(response.data.data)
        // console.log(response.data)
        // console.log('submit', querySearch) 
    }

    const handleChange = e => {
        setQuerySearch(e.target.value)
    }


    let searchFormContent = <Search
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    querySearch={querySearch}
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

export default SearchContainer