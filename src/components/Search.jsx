

const Search = props => {

    return <div>
        <form onSubmit={props.handleSubmit}>
            <input 
            type="text"
            placeholder='search for giphy'
            value={props.search}
            onChange={props.handleChange}
            />

          
            <input 
            type='submit'
            value='search'
            />
        </form>
    </div>
} 

export default Search;




