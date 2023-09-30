import React, { useEffect } from 'react'
import Todo from './Todo';
function Todos() {
    const getTodos = () => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        console.log(storedTodos)
          return storedTodos;
      
        // if (currentTab === ALL_TODOS) {
        //   return storedTodos;
        // } else if (currentTab === ACTIVE_TODOS) {
        //   return storedTodos.filter(todo => !todo.done);
        // } else if (currentTab === DONE_TODOS) {
        //   return storedTodos.filter(todo => todo.done);
        // }
        // return [];
      };
      useEffect(()=>{
        getTodos();
      },[])
      
    return (
        <div>
            <ul>
                {
                    getTodos().map((todo,idx) => (
                        <Todo
                            key={idx}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default Todos
