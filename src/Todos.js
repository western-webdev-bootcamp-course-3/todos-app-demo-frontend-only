import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

const Todos = () => {
  // represents the list of todos: an array of objects
  // each object represents a todo item with three fields: id, item, and completed
  // e.g., [{id: 1, item: 'Walk the dog', completed: false}, 
  //        {id: 2, item: 'Wash the dishes', completed: false}]
  const [todos, setTodos] = useState([]);

  return (
    <div className='todos'>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoFooter todos={todos} />
    </div>
  );
};

export default Todos;
