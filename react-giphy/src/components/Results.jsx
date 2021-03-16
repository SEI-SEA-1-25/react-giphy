const Results = props => {
    return(
        <div>
            <h1>{props.data.title}</h1>
            <img src={props.images.fixed_height.url} />
        </div>
    )
}

export default Results