const ToDoList= (props) => {
    return (
        <div>
            <div className="ToDo">
                <h1>To do</h1>
                {(props.status == 0) ?
                <div>
                    {props.todo.map((toDo) => (
                        <div className="Container-3">
                            <li key={toDo.id}>
                                <input 
                                    type="text" 
                                    value={toDo.title} 
                                    onChange={(event) => event.preventDefault()} />
                            </li>
                            <button onClick={props.setStatus(1)}>edit</button>
                        </div>
                    ))}
                </div> : ""     
            }
            </div>
        </div>
    )
}

export default ToDoList;