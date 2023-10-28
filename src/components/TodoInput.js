import { useState } from 'react';

const TodoInput = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
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
