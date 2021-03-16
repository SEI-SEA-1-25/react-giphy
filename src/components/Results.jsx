export default function Results(props){
    return (
        <div>
            {props.results.map((result, index) => (
                <div key={index}>
                    <img src={result.images.fixed_height.url} alt={result.title} height="300px" />
                    <p>{result.title}</p>
                </div>
            ))}
        </div>
    )
}