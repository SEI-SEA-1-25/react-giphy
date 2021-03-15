//Imports//
import "./Home.css";
import glass from "./search.gif";

function Home() {
  return (
    <div className="Home">
      <h1>Search Giphy</h1>
      <h3>
        <img src={glass} alt="searchGif" className="glass" />
      </h3>
      <form className="search-form">
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Home;
