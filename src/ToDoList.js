import react from "react";
import './ToDo.css'

function ToDoList(props){
    return(
        <section className="todo-list-container">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { ToDoList};