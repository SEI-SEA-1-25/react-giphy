import { useEffect, useState } from "react"
import axios from 'axios'

const Details = props => {
    const [searchResult, setSearchResult] = useState({})

    useEffect(() => {
        async function fetchData() {
            let id = props.match.params.giphyId
            if (!id) return;
            const url = `http://api.giphy.com/v1/gifs/${id}`
            const GIPHY_KEY = 'SfDfvNT445Ye0NdQ7UnS3PkYGTipojwF'
            const response = await axios.get(`${url}?api_key=${GIPHY_KEY}`)
            const data = response.data.data
            setSearchResult(data)
        }
        fetchData()
    }, [])

    let result = <></>
    if (Object.keys(searchResult).length !== 0) {
        result = (
            <div>
                <img
                    src={searchResult.images.fixed_height.url}
                    alt={searchResult}
                    width={searchResult.images.fixed_height.width}
                    height={searchResult.images.fixed_height.height}
                />
                <ul>
                    <li>Rating: {searchResult.rating}</li>
                    <li>Source: <a href={searchResult.source} target="_blank">View Source</a></li>
                    <li>Created: {searchResult.import_datetime}</li>
                </ul>
            </div>
        )
    } else {
        result = (
            <div>No result</div>
        )
    }
    return (
        <div>
            {result}
        </div>
    )
}

export default Details