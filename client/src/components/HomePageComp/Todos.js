import { useEffect } from 'react';

import { deleteTodo, getAllTodos } from '../../redux/actions/index';
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../../redux/actions/type';

import { useDispatch, useSelector } from 'react-redux';


// component
import Todo from './Todo';
import Tabs from './Tabs';


export const Todos = () => {

    const dispatch = useDispatch();
    //  we need to pull data from api to redux
    const todos = useSelector(state => state.todos);   //by this we have pulled out the complete data from the redux as in redux ke andar state hai and state ke andar todos hai
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.done)
        } else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done)
        }
    }

    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTodo(_id));
            }
        })
    }

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />

                {
                    todos.some(todo => todo.done) ? (
                        <button
                            onClick={removeDoneTodos}
                            className="button clear"
                        >Remove Done Todos</button>
                    ) : null    
                }
            </div>

            <ul>
                {
                    getTodos().map(todo => (
                        <Todo 
                            key={todo._id}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos;