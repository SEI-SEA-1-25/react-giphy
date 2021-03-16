import {useState, useEffect} from 'react'

const Search = () => {
    const [querySearch, setQuerySearch] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('searched') 
    }

    const handleChange = (e) => {
        this.setQuerySearch({querySearch: e.target.value})
    }

    return(
        <div className="search">
            <h3>Search for Giphy:</h3>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={querySearch}
                    placeholder="Search"
                    onChange={handleChange}
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Search