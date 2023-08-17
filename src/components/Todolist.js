import React from "react";
import Todoitem from "./Todoitem";

const Todolist = ({todos , onDelete}) => {
    return (
        <div className="todo-list">
            {todos.map(todo => ( 
                <Todoitem key={todo.id} todo={todo} onDelete={onDelete}/>
            ))}
            
        </div>
    )
}
export default Todolist