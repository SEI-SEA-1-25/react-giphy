export default function Results(props){
    return (
        <div className="results-container">
            {props.results.map((result, index) => (
                <div key={index} className="result">
                    <img src={result.images.fixed_height.url} alt={result.title} />
                    <p>{result.title}</p>
                </div>
            ))}
        </div>
    )
}