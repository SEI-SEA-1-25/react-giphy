const Search = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.query} onChange={props.handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Search 