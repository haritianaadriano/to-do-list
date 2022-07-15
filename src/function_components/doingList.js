const DoingList = (props) => {
    return (
        <div>
            <div className="Doing">
                <h1>Doing</h1>
                {(props.status == 1) ?
                <div>
                    {props.todo.map((toDo) => (
                        <div className="Container-3">
                            <li key={toDo.id}>
                                <input 
                                    type="text" 
                                    value={toDo.title} 
                                    onChange={(event) => event.preventDefault()} />
                            </li>
                            <button onClick={props.setStatus(2)}>edit</button>
                        </div>
                    ))}
                </div> : ""     
            }
            </div>
        </div>
    )
}

export default DoingList;