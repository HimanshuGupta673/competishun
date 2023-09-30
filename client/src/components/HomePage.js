import React, { useEffect } from 'react';
import Header from './HomePageComp/Header';
import TodoForm from './HomePageComp/TodoForm';
import Todos from './HomePageComp/Todos';
import Head from './Head'
function HomePage() {
  useEffect(() => {
    const jsonData = localStorage.getItem('todos');

    if (jsonData) {

      const todos = JSON.parse(jsonData);
      todos.forEach(todo => {
        delete todo.Sno;
        delete todo.title;
        delete todo.description;
      });
      const updatedJsonData = JSON.stringify(todos);
      localStorage.setItem('todos', updatedJsonData);
    }
  }, []);

  return (
    <div className='homescreen'>
      <Head/>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default HomePage;
