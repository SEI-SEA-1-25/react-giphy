import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from "./Search"
import Results from './Results'

export default function SearchContainer(){
    const [results, setResults] = useState([])
    const [query, setQuery] = useState('')
    const [searched, setSearched] = useState(false)

    const handleChange = (e) => {
        
        setQuery(e.target.value)
    }
    
    const getResults = async () => {
        try {
            const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=CFwH3HV5aYBclA0BCRBS2jN6CTklMPqt`)
            console.log(response.data.data)
            setResults(response.data.data)
        } catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        console.log('whats up')

    }, [query])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        getResults()
        console.log('Searched!')
        console.log(query)
    }
    return (
        <div>
            
            <Search 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            />
            <Results results={results}/>
        </div>
    )
}