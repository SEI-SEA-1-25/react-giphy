import Search from "./Search"
import { useState} from 'react'
import axios from 'axios'
import Results from './Results'


const SearchContainer = () => {
    const [search, setSearch] = useState(' ') 
    const [searchResults, setSearchResults] = useState([])
    const [hasSearched, setHasSearched] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault()
        const API_KEY ='J9F9oxTl9xBueA4xhmLG1zd6CBvx8hA3'
        const url ='http://api.giphy.com/v1/gifs/search'
        const response = await axios.get(`${url}?api_key=${API_KEY}&q=${search}`)
        setHasSearched(true)
        setSearchResults(response.data.data)


    }
    const handleChange = e => {
        setSearch(e.target.value)
    }

    let searchFormContent = <Search 
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    search={search}
    />
    let resultsContent = searchResults.map((result, idx) => {
        return <Results key={idx} data={result} />
    })


    return <div>
        {searchFormContent}
        {hasSearched ? resultsContent : <></>}
    </div>

}

export default SearchContainer;