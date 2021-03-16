import  { useEffect, useState } from 'react';
import Search from './Search'
import SearchResults from './SearchResults'


const SearchContainer = () => {

    const [searchString, setSearchString] = useState('default search string')
    const [searchRender, setSearchRender] = useState(false)



    const handleSubmit = async(e) => {
        e.preventDefault()
        setSearchRender(true)
        //have to somehow call to render the function. 
    }

    const handleChange = async(e) => {
        e.preventDefault()
        setSearchString(e.target.value)
        console.log(searchString)
    }

    const clearSearchResults = (e) => {
        e.preventDefault()
        setSearchRender(false)
    }



    return(
    <div>
        <h3>Hello this is Search Container</h3>
        <Search 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        searchString={searchString}
        />
        <SearchResults 
        searchRender={searchRender}
        searchString={searchString}
        />
        <button onClick={clearSearchResults}>Clear Search Results</button>
    </div>)
}

export default SearchContainer;