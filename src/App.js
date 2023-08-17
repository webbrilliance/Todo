import React, { useState } from "react";
import Todolist from "./components/Todolist";
import './App.css'

function App () {
 const [todos , setTodos] = useState([
  {id:1 , text : "go to market"},
  {id:2 , text: "learn react with web brilliance"},
  {id:3 , text: "play football"},
]);

 const handleDelete = id => {
  const updatedtodos = todos.filter(todo => todo.id !== id)
  setTodos(updatedtodos);
 };
 const [newTodoText ,setNewTodoText] = useState('')
 
 const handleAddtodo = () => {
  if (newTodoText.trim !== ''){
    const newtodo = {id: Date.now() , text: newTodoText}
    setTodos([...todos , newtodo])
    setNewTodoText('')

  }
 }


return(
  <div className="App">
    <h2>Todo App</h2>
    <div className="add-todo">
      <input 
      type="text"
      value={newTodoText}
      onChange={e => setNewTodoText(e.target.value)}
      placeholder="Add Text"/>
      <button onClick={handleAddtodo}>Add Todo</button>
    </div>
    <Todolist todos={todos} onDelete={handleDelete} />
  </div>
);
}
export default App