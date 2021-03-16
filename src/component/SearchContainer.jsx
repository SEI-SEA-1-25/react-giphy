import { Component } from "react"
import Search from "./Search"

export default class SearchContainer extends Component {
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
                <Search />
            </div>
        )
    }
}