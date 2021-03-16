import { getByDisplayValue } from "@testing-library/dom";

const Search = (props) => {

   const gifs = props.data.map((gif, index) => (
        <img src={gif.images.original.url} width="100px" key={index} alt={gif.title}/>
   ))


    
    return (
        <div>
                

         {gifs}
             

        </div>
    )
}


export default Search;