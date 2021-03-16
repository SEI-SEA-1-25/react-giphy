import {useState, useEffect} from 'react'
import Results from './Results'
import Search from './Search'
let axios = require ('axios')

const SearchContainer = () => {
    const [query, setQuery] = useState("")
    const [searchResult, setserchResult] = useState([])
    const [hasSearched, setHasSearched] = useState(false)
    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const API_KEY = 'jKj5WeboQNPV8ivNwyhmrkq8CziTIPqe'
        const url = 'https://api.giphy.com/v1/gifs/search'
        
        const response = await axios.get(`${url}?api_key=${API_KEY}&q=${query}`)
        
        console.log(response.data.data)
        setHasSearched(true)
        setserchResult(prev => [...prev, ...response.data.data])
        setQuery("")
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    let searchFormContent = <Search 
                                handleSubmit={handleSubmit}
                                handleChange={handleChange}
                                query={query}
                            />
    let resultsContent = searchResult.map((result, index) => {
        return <Results key={index} searchResult={result}/>
    })                        
    return (
        <div>
            {searchFormContent}
            {hasSearched ? resultsContent : <></>}
        </div>
    )
}
export default SearchContainer