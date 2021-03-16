import Search from './Search'
import { useEffect, useState } from 'react'

const SearchContainer = () => {
    const [search, setSearch] = useState([])
    
    useEffect( () =>{
       
    })
    
    const onSubmit = (e) => {   
        e.preventDefault();
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

            <Search search={search}/>

        </div>
    )
}

export default SearchContainer