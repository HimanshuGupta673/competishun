import { useEffect, useState } from "react";
import boxicons from 'boxicons';
// import { toggleTodo, updateTodo } from "../redux/actions";
// import { deleteTodo } from "../redux/actions";

// import { useDispatch } from "react-redux";

    

function Todo({todo}) {
    var todos;
    useEffect(()=>{
         todos = JSON.parse(localStorage.getItem('todos')) || [];
    })
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.text);

    const toggleTodo = (id) => { 
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
      
        const todoIndex = todos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
          todos[todoIndex].done = !todos[todoIndex].done;
          localStorage.setItem('todos', JSON.stringify(todos));
        }
      };
      const deleteTodo = (id) => {
   
        const updatedTodos = todos.filter((todo) => todo.id !== id);
     
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
      };
    
      const updateTodo = (id, newText) => {
  
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        );
    
        // setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
      };
    
      

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        updateTodo(todo.id, text)
    }
    return (
        <li
            className="task"
            onClick={() => toggleTodo(todo.id)}
            style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                color: todo.done ? '#bdc3c7' : '#34495e',
                backgroundColor: todo.done ? '#20B2AA' : '#34495e'
            }}
            data-testid="todo-test"
        >
            <span style={{ display: editing ? 'none' : 'block' }}>{todo?.text}</span>

            <form
                style={{ display: editing ? 'block' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <span>
            <span
                className="icon"
                onClick={() => deleteTodo(todo.id)}
            >
                <i class='bx bxs-trash-alt' ></i>
            </span>
            <span
                className="icon"
                onClick={() => setEditing((prevState) => !prevState)}
            >
                <i class='bx bxs-edit-alt'></i>
            </span>
            </span>
        </li>

    )
}

export default Todo
