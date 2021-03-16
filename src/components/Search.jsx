const Search = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.query} onChange={props.handleChange}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Search 