const SearchResult = (props) => {
    return(
        <div>
            <h4>
               This is a Search Result 
            </h4>
            <h6>
                {props.id}
            </h6>
            <img src={props.url} alt="loading..." />
        </div>
    )
}



export default SearchResult