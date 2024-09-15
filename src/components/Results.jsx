const Results = (props) => {
    return (
        <div className="results-container">
            {props.gifResults.map((gifResult, idx) => {
                return (
                    <div className="result" key={idx}>
                        <img src={gifResult.images.fixed_height.url} alt="gif"/>
                    </div>
                )
            })}
        </div>
    )
}

export default Results