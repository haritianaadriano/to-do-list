import './App.css';
import Header from './function_components/header';
import Form from './function_components/form';
import ToDoList from './function_components/toDoList';
import DoingList from './function_components/doingList';
import DoneList from './function_components/doneList';
import React from 'react';
import { useState } from 'react';

function App(){

  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState (0);

  return(
    <div>
      <div className='Container'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
          />
        </div>
        <div className='Container-2'>
          <div>
          <ToDoList status={status} setStatus={setStatus} todo={todo} setTodo={setTodo}/>
          </div>
          <div>
          <DoingList status={status} setStatus={setStatus} todo={todo} setTodo={setTodo}/>
          </div>
          <div>
            <DoneList status={status} setStatus={setStatus} todo={todo} setTodo={setTodo}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

