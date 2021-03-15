import { useState } from 'react'

const Search = () => {
    const[query, setQuery] = useState('')

    const searchResults = () => {
        console.log("searched!")
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
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleChange}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Search 