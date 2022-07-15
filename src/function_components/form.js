import {v4 as uuidv4} from "uuid";

const Form = (props) => {

    const inputChange = (event) => {
        props.setInput(event.target.value);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.setTodo([...props.todo, {id: uuidv4(), title: props.input, completed: false}]);
        }

    return (
        <form className="Form" onSubmit={onFormSubmit}>
            <input type="text" 
                placeholder="enter a to do..." 
                className="Input"
                value={props.input}
                required
                onChange={inputChange}
                />
            <button type="button" className="Button">Add</button>
        </form>
    )
}

export default Form;