import Search from "./Search";
import axios from "axios";
import { useState } from "react";

//Main Function//
const SearchContainer = () => {
  //Set the state//
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResult] = useState([]);

  //Ties the typed input to this state var//
  const handleSubmit = async (e) => {
    e.preventDefault();

    //API key//
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://api.giphy.com/v1/gifs/search`;

    //get data from API//
    const response = await axios.get(
      `${API_URL}?api_key=${API_KEY}&q=${query}`
    );
    setSearchResult(response.data.data);
    console.log("submitted", query);
  };

  //This handles the change from the user's side//
  //instead of the state's value being defined on the dev's side//
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        query={query}
      />
    </div>
  );
};
export default SearchContainer;
