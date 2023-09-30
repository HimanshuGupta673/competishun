import React from 'react'
import { useState,useEffect } from 'react'
function TodoForm() {
    const [text, setText] = useState("");
    const initialTodoList = JSON.parse(localStorage.getItem('todos')) || [];
    const [todoList, setTodoList] = useState(initialTodoList);

    const onFormSubmit = (e) => {
        e.preventDefault();
        addNewTodo(text);
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    const addNewTodo = (text) => {
        if (text.trim() === '') {
            return;
        }
        const newTodo = {
            id: Date.now(),
            text,
            done: false,
        };
        setTodoList([...todoList, newTodo]);
        setText('');
    };

    return (
       
            <form className="form2" onSubmit={onFormSubmit}>
                <input
                    placeholder="Enter new todo..."
                    className="input"
                    onChange={onInputChange}
                    value={text}
                />
            </form>
      
    )
}

export default TodoForm
