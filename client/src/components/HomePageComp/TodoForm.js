import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TodoForm = () => {
    const [text, setText] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("low");

    const dispatch = useDispatch();
    var login = JSON.parse(localStorage.getItem('login'));

    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const newTodo = {
                data: text,
                dueDate: dueDate,
                priority: priority,
                email: login ? login.email : null,
            };
            await dispatch(addNewTodo(newTodo));
            toast.success('New Todo added Successfully')
            setText("");
            setDueDate("");
            setPriority("low");
        } catch (error) {
            console.log("Error while submitting the form", error.message);
        }
    };


    const onInputChange = (e) => {
        setText(e.target.value);
    };

    const onDueDateChange = (e) => {
        setDueDate(e.target.value);
    };

    const onPriorityChange = (e) => {
        setPriority(e.target.value);
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <form className="form" onSubmit={onFormSubmit}>
                <input
                    placeholder="Enter new todo..."
                    className="input"
                    onChange={onInputChange}
                    value={text}
                />
                <input
                    type="date"
                    placeholder="Enter due Date"
                    className="input"
                    onChange={onDueDateChange}
                    value={dueDate}
                />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    Priority:
                    <label className="todoformlabel">
                        <input
                            type="radio"
                            value="low"
                            checked={priority === "low"}
                            onChange={onPriorityChange}
                        />{" "}
                        Low
                    </label>
                    <label className="todoformlabel">
                        <input
                            type="radio"
                            value="medium"
                            checked={priority === "medium"}
                            onChange={onPriorityChange}
                        />{" "}
                        Medium
                    </label>
                    <label className="todoformlabel">
                        <input
                            type="radio"
                            value="high"
                            checked={priority === "high"}
                            onChange={onPriorityChange}
                        />{" "}
                        High
                    </label>
                </div>
                <button className="todoformbutton" type="submit">Add Todo</button>
            </form>
        </>
    );
};

export default TodoForm;
