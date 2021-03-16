import  { useState } from 'react';


export default function Search(props){

    // useEffect(() => {
    //     console.log(searchString)
    // },[searchString])
    const handleSubmit = e => {
        console.log("handle submit is getting called")
        props.handleSubmit(e)
    }

    const handleChange = e => {
        console.log("handle change is getting called")
        props.handleChange(e)
    }


    return(<div>
        <h4>This is Search Bar</h4>
        
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <input type="submit" value="stringSearched" />
        </form>
    </div>)
}