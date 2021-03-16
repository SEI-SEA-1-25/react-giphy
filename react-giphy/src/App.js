import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from "./components/Search"
import Info from './components/Info.jsx'

const App = () => {
    return (
        <Router>
            <h1>Search</h1>
            <h5>Giphy Search</h5>
            <Switch>
                <Route path="/giphy/:giphyId" component={Details} />
                <Route path="/" component={Search} />
            </Switch>
        </Router>
    )
}

export default App