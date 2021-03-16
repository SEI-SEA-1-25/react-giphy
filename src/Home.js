import './App.css';
// import HelloWorld from './components/HelloWorld';
// import Search from './components/Search';
import SearchContainer from './components/SearchContainer';

function Home() {
  return (
    <div className="App">
      <h1>Giphy Search</h1>
      <SearchContainer />
    </div>
  );
}

export default Home;
