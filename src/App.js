
import React from "react";
import { ToDoCounter } from './ToDoCounter'
import { ToDoSearch } from './ToDoSearch'
import { ToDoList } from './ToDoList'
import { ToDoItem } from './ToDoItem'
import { CreateToDoButton } from './CreateToDoButton'
import './ToDo.css'

// import './App.css';
const todos = [
  {text:'Cortar cebolla', completed:true},
  {text:'Llorar con cebolla', completed:false},
  {text:'Sofreir la cebolla', completed:false},
]

function App(props) {
  return (
    <React.Fragment>
      <div className="container">
        <ToDoCounter />
        <div className="search-bar-container">
          <ToDoSearch />      
        </div>
        <ToDoList>
            {todos.map(item => (
              <ToDoItem 
                key={item.text} 
                text={item.text}
                completed={item.completed}
              />
            ))}
        </ToDoList>
        <div className="button-container">
          <CreateToDoButton />
        </div>
      </div>
    </React.Fragment>
    );
}

export default App;
