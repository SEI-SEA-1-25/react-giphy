import { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
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