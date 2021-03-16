import  { useState } from 'react';


const Search = (props) => {

    // useEffect(() => {
    //     console.log(searchString)
    // },[searchString])


    // const handleSubmit = e => {
    //     console.log("handle submit is getting called")
    //     props.handleSubmit(e)
    // }

    // const handleChange = e => {
    //     console.log("handle change is getting called")
    //     props.handleChange(e)
    // }
    const handleChange = (e) => {
        props.handleChange(e)
    }



    return(<div>
        <h4>This is Search Bar</h4>
        
        <form onSubmit={props.handleSubmit}>
            <input type="text" onChange={handleChange} /> 
            <input type="submit" value="Search!" />
        </form>
    </div>)
}

export default Search;