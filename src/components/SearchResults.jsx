import  { useEffect, useState } from 'react';
import SearchResult from './SearchResult'
const axios = require('axios')


const API_KEY = "5l1F6TuBXmdgvWOnbmzTTK2SMQkke4oD"

const SearchResults = (props) => {

    const [searchResults, setSearchResults] = useState([])

    const makeApiCall = async(stringToSearch) => {
        try{
        const api_call = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${stringToSearch}&limit=25&offset=0&rating=g&lang=en`
        const api_results = await axios.get(api_call)
        const api_results_array = api_results.data.data
        console.log(api_results)
        
        
        const api_results_elements = api_results_array.map(element => {
            return <SearchResult id={element.id} url={element.images.fixed_height.url} />
        })


        setSearchResults(api_results_elements)
        }
        catch(err){
            console.log("some issue with the api or whatever")
            console.log(err)
        }
    }

    useEffect( () => {
        console.log("Search results should toggle!")

        if(props.searchRender){
            makeApiCall(props.searchString)
        }
    },[props.searchRender])

    return(
    <div>
        <h4>Hello From Search Results</h4>
        {searchResults}
    </div>
    )
}


export default SearchResults;