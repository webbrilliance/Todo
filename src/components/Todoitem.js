import React from "react";

const Todoitem = ({todo , onDelete}) => {
    return(
        <div className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    )
}
export default Todoitem