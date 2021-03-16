import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from "./Search"

export default function SearchContainer(){
    const [results, setResults] = useState('')
    const [query, setQuery] = useState('')
  
    const handleChange = (e) => {
        
        setQuery(e.target.value)
    }
    
    const search = async () => {

    }
    useEffect(() => {
        console.log('whats up')

    }, [query])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Searched!')
        console.log(query)
    }
    return (
        <div>
            
            <Search 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            />
        </div>
    )
}