import { useState, useEffect } from "react";
import glass from "../search.gif";
import axios from "axios";

//Variables//
const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=`;

const Search = (props) => {
  const [query, setQuery] = useState("");

  //Hooks//
  const searchQuery = () => {
    // console.log("Searched!");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchQuery();
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  //   console.log(`Query: ${query}`);
  //   console.log(`${API_URL}${query}`);
  let userSearch = `${API_URL}${query}&limit=100&offset=0&rating=pg-13&lang=en`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(userSearch);
      console.log(response.data);
    };
    fetchData();
  });

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={query} />
        <input type="submit" />
      </form>
      <img src={glass} className="glass" alt="searchGif" />
    </div>
  );
};
export default Search;
