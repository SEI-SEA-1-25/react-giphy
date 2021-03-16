

const Search = props => {

    return(
        <div className="search">
            <h3>Search for Giphy:</h3>

            <form onSubmit={props.handleSubmit}>
                <input 
                    type="text"
                    value={props.querySearch}
                    placeholder="Search"
                    onChange={props.handleChange}
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Search