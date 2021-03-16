import { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <h1>Giphy Search</h1>
                <p>The true source for all things giphy...</p>
                <input type="text" />
                <input type="button" value="search" />
            </div>
        )
    }
}