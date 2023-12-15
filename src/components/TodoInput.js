import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && newTodo.trim() !== '') {
      setTodos([...todos, {id: uuidv4(), item: newTodo, completed: false}]);
      setNewTodo('');
    }
  };

  return (
    <div className='todo-input'>
      <input
        type='text'
        placeholder='What needs to be done?'
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default TodoInput;
