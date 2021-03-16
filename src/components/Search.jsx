export default function Search(props){
    return (
        <div>
            <form onSubmit={props.handleSubmit}> 
                <input type="text" value={props.query} onChange={props.handleChange} placeholder='search for a gif'/>
                <input type="submit" />
            </form>
        </div>
    )
}