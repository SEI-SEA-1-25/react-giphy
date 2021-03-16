import { Component } from 'react'

export default class Search extends Component {
    handleChange = (event) => {
        console.log('handle change!')
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('searched!')
    }

    render() {
        return (
            <div>
                <h1>Giphy Search</h1>
                <p>The true source for all things giphy...</p>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.query}
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        value="search"
                    />

                </form>
            </div>
        )
    }
}