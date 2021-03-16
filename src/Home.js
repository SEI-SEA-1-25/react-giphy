import './App.css';
// import HelloWorld from './components/HelloWorld';
// import Search from './components/Search';
import SearchContainer from './components/SearchContainer';

function Home() {
  return (
    <div className="App">
      <h1>Giphy Search</h1>
      <p>The true source for all things giphy...</p>
      <SearchContainer />
    </div>
  );
}

export default Home;
