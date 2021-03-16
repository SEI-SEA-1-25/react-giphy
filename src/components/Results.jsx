export default function Results(props){
    return (
        <div>
            {props.names.map((name, index) => (
                <div key={index}>
                    <img src="name.url" alt="" height="300px" />
                </div>
            ))
            )
        </div>
}