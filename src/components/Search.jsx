//Imports//
import "../Home.css";
import glass from "../search.gif";
import { useState, useEffect } from "react";
import axios from "axios";

// console.log(process.env.REACT_APP_API_KEY);
const GIPHY_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}`;

//Main Function
const Search = (props) => {
  //Set Init State
  const [searchValue, setSearchValue] = useState("");
  //   const dataToSearch = data.title;
  //   const inturpSearch = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${dataToSearch}&limit=100&offset=0&rating=pg-13&lang=en`;

  function handleChange(e) {
    // console.log(e.target.value);
    setSearchValue(e.target.value);
  }
  console.log(props.setSearchValue);
  //Fetch API data
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(GIPHY_URL);
      console.log(response.data);
      //   let dataToSearch =
      //   const searchedTerm = `${GIPHY_URL}&q=${dataToSearch}&limit=100&offset=0&rating=pg-13&lang=en`;
    };
    fetchData();
  }, []);

  return (
    <div className="search">
      <h1>Search Giphy</h1>
      <h3>
        <img src={glass} alt="searchGif" className="glass" />
      </h3>
      <form className="search">
        <input value={searchValue} onChange={handleChange} type="text" />
        <input
          type="submit"
          // onClick={callSearchFunction}
          value="SEARCH"
        />
      </form>
    </div>
  );
};

export default Search;
