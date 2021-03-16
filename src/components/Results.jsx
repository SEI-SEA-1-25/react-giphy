const Results = props => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <a href={props.data.image.fixed_height.url} />
        </div>
    )
}

export default Results