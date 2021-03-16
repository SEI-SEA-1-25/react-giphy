import  { useEffect, useState } from 'react';
import Search from './Search'


export default function SearchContainer(){

    [finalSearch,setFinalSearch] = useState("")
    const [searchString, setSearchString] = useState('default search string')

    useEffect(()=>{
        console.log("VALUE AT PARENTS HAS BEEN UPDATED")
        console.log(searchString)

    }, searchString)


    handleSubmit = async(e) => {

        e.preventDefault()
        alert("handle submit")
        props.setSearch(searchString)
        console.log(searchString)

    }

    handleChange = async(e) => {
        alert("handle change")
        e.preventDefault()
        setSearchString(e.target.value)
    }


    return(
    <div>
        <Search 
        handleSubmit={handleSubmit}
        handleChange={handleChange} />
    </div>)
}