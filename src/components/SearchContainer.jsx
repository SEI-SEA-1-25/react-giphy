import Search from './Search'
import { useEffect, useState } from 'react'
import axios from 'axios'

const SearchContainer = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    
    // useEffect( () =>{
    //    console.log(search)
    // },[])
    
    const onSubmit = (e) => {   
        e.preventDefault();
        async function userSearch ()  {
            const url = `https://api.giphy.com/v1/gifs/search?api_key=jCy43fZ4iJvKEHkxdi6UVjP65U0lLUjZ&q=${search}`
            const response = await axios.get(url)
            const data = response.data.data
            setData(data)
            
        }
        userSearch();
        
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <input type="submit"/>

            </form>

            <Search data={data}/>

        </div>
    )
}

export default SearchContainer