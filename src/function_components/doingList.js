import {v4 as uuidv4} from "uuid";


const DoingList = (props) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.setDone([...props.doing, {id: uuidv4(), title: props.input, completed: true}])
        }

    return (
            <div className="Doing">
                <h1>Doing</h1>
                {props.doing.map((Doing) => (
                        <form className="Container-3" onSubmit={onFormSubmit}>
                            <li key={Doing.id}>
                                <input 
                                    className="Values"
                                    type="text" 
                                    value={Doing.title} 
                                />
                            </li>
                            <button className="yellow">done</button>
                        </form>
                    ))}   
            </div>
    )
}

export default DoingList;