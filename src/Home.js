import logo from './logo.svg';
import './App.css';
import SearchContainer from './components/SearchContainer';

const Home = () => {
  return (
    <div className="App">
      <h1>Giphy Search</h1>
      <p>The true source for all things giphy...</p>
      <SearchContainer />
    </div>
  );
}

export default Home;
