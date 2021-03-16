const Results = (props) => {
    return (
        <div>
            {props.gifResults.map((gifResult, idx) => {
                return (
                    <div key={idx}>
                        <img src={gifResult.images.fixed_height.url} alt="gif"/>
                    </div>
                )
            })}
        </div>
    )
}

export default Results