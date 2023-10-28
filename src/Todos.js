import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className='todos'>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoFooter />
    </div>
  );
};

export default Todos;
