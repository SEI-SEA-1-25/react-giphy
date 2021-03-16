export default function Search(props){
    return (
        <div>
            <form onSubmit={props.handleSubmit}> 
                <input type="text" onChange={props.handleChange} placeholder='🍉'/>
                <input type="submit" />
            </form>
        </div>
    )
}