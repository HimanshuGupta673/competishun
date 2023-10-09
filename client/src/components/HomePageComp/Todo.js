import { useState } from "react";

import { toggleTodo, updateTodo } from "../../redux/actions";
import { deleteTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    };
    const isDueDateRed = (isoDate) => {
        const today = new Date();
        const dueDate = new Date(isoDate);
        const twoDaysFromNow = new Date();
        twoDaysFromNow.setDate(today.getDate() + 2);

        return dueDate <= twoDaysFromNow;
    };
    return (
        <div>
            <div style={{ color: isDueDateRed(todo.dueDate) ? 'red' : 'green' }}>
                Due Date : {formatDate(todo.dueDate)}
            </div>
            <li
                className="task"
                onClick={() => dispatch(toggleTodo(todo._id))}
                style={{
                    textDecoration: todo.done ? 'line-through' : '',
                    color: todo.done && !editing ? '#bdc3c7' :'#000000',
                    backgroundColor: todo.done && !editing ? '#bdc3c7' :
                    todo.priority === 'high' ? '#f7a3a3' :
                        todo.priority === 'medium' ? '#799df7' :
                            '#c4f0bb',

                }}
                data-testid="todo-test"
            >
                <span style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>

                <form
                    style={{ display: editing ? 'inline' : 'none' }}
                    onSubmit={onFormSubmit}
                >
                    <input
                        type="text"
                        value={text}
                        className="edit-todo"
                        onChange={(e) => setText(e.target.value)}
                    />
                </form>

                <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                    <i className="fas fa-trash" />
                </span>
                <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                    <i className="fas fa-pen" />
                </span>
            </li>
        </div>
    )
}

export default Todo;