import {v4 as uuidv4} from "uuid";

const ToDoList= (props) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.setDoing([...props.doing, {id: uuidv4(), title: props.input, completed: false}])
        }

    return (
            <div className="ToDo">
                <h1>To do</h1>
                    {props.todo.map((toDo) => (
                        <form className="Container-3" onSubmit={onFormSubmit}>
                            <li key={toDo.id}>
                                <input 
                                    className="Values"
                                    type="text" 
                                    value={toDo.title} 
                                />
                            </li>
                            <button className="red">doing</button>
                        </form>
                    ))}
            </div>
    )
}

export default ToDoList;