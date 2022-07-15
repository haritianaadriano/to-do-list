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
  const [done, setDone] = useState([]);
  const [doing, setDoing] = useState([]);

console.log(todo);

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
            doing={doing}
            setDoing={setDoing}
            done={done}
            setDone={setDone}
          />
        </div>
        <div className='Container-2'>
          <div>
            <ToDoList 
              input={input}
              setInput={setInput}
              todo={todo} 
              setTodo={setTodo}
              doing={doing}
              setDoing={setDoing}
              done={done}
              setDone={setDone}
            />
          </div>
          <div>
            <DoingList 
              input={input}
              setInput={setInput}
              todo={todo} 
              setTodo={setTodo}
              doing={doing}
              setDoing={setDoing}
              done={done}
              setDone={setDone}
            />
          </div>
          <div>
            <DoneList
              input={input}
              setInput={setInput}
              todo={todo} 
              setTodo={setTodo}
              doing={doing}
              setDoing={setDoing}
              done={done}
              setDone={setDone}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

