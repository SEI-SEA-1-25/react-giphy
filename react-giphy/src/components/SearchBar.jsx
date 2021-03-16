import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = () => url `http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${api_key}`;
  
  
  handleSubmit = api_key = "0wKqH3UcgGm9bCJgU91W5NADGjsS3cWZ";
  preventDefault()
  
  
  
  return {(
    
        
        <form onSubmit={this.handleSubmit}>
        <label>
        <input
        type={"text"}
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={"Search Giphy"}
        />
        </label>
        <input type="submit" value="Submit" />
        </form>
        )
      }
    }