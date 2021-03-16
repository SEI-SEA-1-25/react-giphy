import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import SearchContainer from './components/SearchContainer'


function Home() {
  return (
    <div className="App">
      <h1> Hello -- This is Home of App</h1>
      <SearchContainer />
    </div>
  );
}

export default Home;
