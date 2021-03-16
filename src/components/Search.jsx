import glass from "../search.gif";

//Presentational Component--> no state, no functions'
//All functionality lives in the Parent (aka SearchContainer)

//props get passed from parent. IN parent they need to be defined as a key value pair
//AND pass props into the main child's function
const Search = (props) => {
  return (
    <div className="search">
      <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handleChange} value={props.query} />
        <input type="submit" />
      </form>
      <img src={glass} className="glass" alt="searchGif" />
    </div>
  );
};
export default Search;
