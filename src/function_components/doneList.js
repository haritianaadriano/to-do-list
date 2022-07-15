const DoneList = (props) => {
    return (
        <div className="Done">
            <h1>Done</h1>
            {props.done.map((done) => (
                        <div className="Container-3">
                            <li key={done.id}>
                                <input 
                                    className="Values"
                                    type="text" 
                                    value={done.title} 
                                />
                            </li>
                            <button className="success">succes</button>
                        </div>
                    ))}
        </div>
    )
}

export default DoneList;