const Search = (props) => {
  const banana = props
  console.log(banana);
  
  
  return (
    <div>
      hello from search
      {/* <form onSubmit={props.location.handleSubmit}>
        <input
          type="text"
          onChange={props.location.handleChange}
          value={props.location.query}
        />
        <input type="submit"/>
      </form> */}
    </div>
  )
}

export default Search;