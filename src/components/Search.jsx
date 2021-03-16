function Search (props) {
    return (
        <div>
            <h1>This is search page</h1>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.handleChange} value={props.input}/>
                <input type="Submit" />
            </form>
        </div>
    )

}

export default Search